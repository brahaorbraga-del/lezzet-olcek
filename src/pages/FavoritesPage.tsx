import { RecipeCard } from '../components/RecipeCard';
import { useRecipes } from '../context/RecipeContext';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function FavoritesPage() {
    const { recipes, favorites } = useRecipes();
    const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

    if (favoriteRecipes.length === 0) {
        return (
            <div className="text-center py-20 animate-in fade-in duration-500">
                <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-10 w-10 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Henüz favori tarifiniz yok</h2>
                <p className="text-gray-500 mb-8">Beğendiğiniz tarifleri kalp ikonuna tıklayarak buraya ekleyebilirsiniz.</p>
                <Link to="/" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    Tarifleri Keşfet
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Favori Tariflerim</h1>
                <p className="text-lg text-gray-600">En sevdiğiniz lezzetler bir arada.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {favoriteRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
