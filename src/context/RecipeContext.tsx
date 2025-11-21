import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Recipe } from '../types';
import { recipes as initialRecipes } from '../data/recipes';

interface RecipeContextType {
    recipes: Recipe[];
    favorites: string[];
    toggleFavorite: (id: string) => void;
    rateRecipe: (id: string, score: number) => void;
    getRecipe: (id: string) => Recipe | undefined;
    getRecipesByCategory: (category: string) => Recipe[];
    categories: string[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    userRatings: Record<string, number>;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export function RecipeProvider({ children }: { children: React.ReactNode }) {
    // Changed key to 'recipes_v11' to force a reset of the data for the user
    const [recipes, setRecipes] = useState<Recipe[]>(() => {
        const saved = localStorage.getItem('recipes_v11');
        return saved ? JSON.parse(saved) : initialRecipes;
    });

    const [favorites, setFavorites] = useState<string[]>(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    const [searchTerm, setSearchTerm] = useState('');

    const [userRatings, setUserRatings] = useState<Record<string, number>>(() => {
        const saved = localStorage.getItem('userRatings_v6');
        return saved ? JSON.parse(saved) : {};
    });

    // Save recipes to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('recipes_v11', JSON.stringify(recipes));
    }, [recipes]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('userRatings_v6', JSON.stringify(userRatings));
    }, [userRatings]);

    const toggleFavorite = (id: string) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
        );
    };

    const rateRecipe = (id: string, score: number) => {
        setRecipes(prev => prev.map(recipe => {
            if (recipe.id === id) {
                const previousUserRating = userRatings[id];
                let newRating: number;
                let newCount: number;

                if (previousUserRating !== undefined) {
                    // User is updating their vote
                    if (recipe.ratingCount === 0) {
                        // Edge case: shouldn't happen, but handle it
                        newRating = score;
                        newCount = 1;
                    } else {
                        const currentTotal = recipe.rating * recipe.ratingCount;
                        const adjustedTotal = currentTotal - previousUserRating + score;
                        newCount = recipe.ratingCount; // Count doesn't change
                        newRating = adjustedTotal / newCount;
                    }
                } else {
                    // New vote
                    if (recipe.ratingCount === 0) {
                        // First vote ever - this fixes the NaN bug!
                        newRating = score;
                        newCount = 1;
                    } else {
                        const currentTotal = recipe.rating * recipe.ratingCount;
                        const newTotal = currentTotal + score;
                        newCount = recipe.ratingCount + 1;
                        newRating = newTotal / newCount;
                    }
                }

                return {
                    ...recipe,
                    rating: Number(newRating.toFixed(1)),
                    ratingCount: newCount
                };
            }
            return recipe;
        }));

        // Update user's rating for this recipe
        setUserRatings(prev => ({ ...prev, [id]: score }));
    };

    const getRecipe = (id: string) => recipes.find(r => r.id === id);

    const getRecipesByCategory = (category: string) =>
        recipes.filter(r => r.category === category);

    // Extract unique categories
    const categories = Array.from(new Set(recipes.map(r => r.category)));

    return (
        <RecipeContext.Provider value={{
            recipes,
            favorites,
            toggleFavorite,
            rateRecipe,
            getRecipe,
            getRecipesByCategory,
            categories,
            searchTerm,
            setSearchTerm,
            userRatings
        }}>
            {children}
        </RecipeContext.Provider>
    );
}

export function useRecipes() {
    const context = useContext(RecipeContext);
    if (context === undefined) {
        throw new Error('useRecipes must be used within a RecipeProvider');
    }
    return context;
}
