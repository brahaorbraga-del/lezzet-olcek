import { useParams, Link } from 'react-router-dom';
import { RecipeCard } from '../components/RecipeCard';
import { useRecipes } from '../context/RecipeContext';
import { ChefHat } from 'lucide-react';

export function CategoryPage() {
    const { categoryName } = useParams();
    const { getRecipesByCategory } = useRecipes();

    const recipes = categoryName ? getRecipesByCategory(categoryName) : [];

    if (recipes.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-900">Bu kategoride tarif bulunamadı</h2>
                <Link to="/" className="text-primary hover:underline mt-4 inline-block">Ana sayfaya dön</Link>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                    <ChefHat className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{categoryName}</h1>
                <p className="text-lg text-gray-600">Bu kategorideki en lezzetli tarifler.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
