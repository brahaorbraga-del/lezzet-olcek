import { Clock, Users, Star, Heart } from 'lucide-react';
import type { Recipe } from '../types';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import { cn } from '../lib/utils';

interface RecipeCardProps {
    recipe: Recipe;
}

// Helper to get flag image URL based on cuisine name
const getFlagUrl = (cuisine?: string): string => {
    switch (cuisine) {
        case 'Türk':
            return 'https://flagcdn.com/w40/tr.png';
        case 'İtalyan':
            return 'https://flagcdn.com/w40/it.png';
        case 'Fransız':
            return 'https://flagcdn.com/w40/fr.png';
        default:
            return '';
    }
};

export function RecipeCard({ recipe }: RecipeCardProps) {
    const { favorites, toggleFavorite } = useRecipes();
    const isFavorite = favorites.includes(recipe.id);
    const flagUrl = getFlagUrl(recipe.cuisine);

    return (
        <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
            <Link to={`/recipe/${recipe.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Flag badge */}
                    {flagUrl && (
                        <div className="absolute top-3 left-3 w-12 h-12 rounded-full overflow-hidden bg-white/95 backdrop-blur-sm border border-white/50 shadow-md">
                            <img src={flagUrl} alt={recipe.cuisine} className="w-full h-full object-cover" />
                        </div>
                    )}
                    {/* Rating badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-medium text-gray-700 shadow-sm">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span>{recipe.rating}</span>
                    </div>
                    {/* Category badge */}
                    <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                        {recipe.category}
                    </div>
                </div>
            </Link>
            {/* Favorite button */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(recipe.id);
                }}
                className="absolute top-14 left-3 p-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white transition-colors z-10"
            >
                <Heart className={cn('h-4 w-4 transition-colors', isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400')} />
            </button>
            <Link to={`/recipe/${recipe.id}`} className="block p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {recipe.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {recipe.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{recipe.prepTime + recipe.cookTime} dk</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Users className="h-4 w-4" />
                        <span>{recipe.servings} Kişilik</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
