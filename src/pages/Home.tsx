import { RecipeCard } from '../components/RecipeCard';
import { useRecipes } from '../context/RecipeContext';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

// Get current month for seasonal recipe selection
const getRecipeOfTheMonth = (recipes: any[]) => {
    const currentMonth = new Date().getMonth(); // 0-11

    // Seasonal recipe IDs by month
    const seasonalRecipes: Record<number, string> = {
        0: '3',   // Ocak - Karnıyarık (winter comfort food)
        1: '2',   // Şubat - Mercimek Çorbası (winter soup)
        2: '14',  // Mart - Boeuf Bourguignon (hearty stew)
        3: '13',  // Nisan - Ratatouille (spring vegetables)
        4: '9',   // Mayıs - Pizza Margherita (light and fresh)
        5: '1',   // Haziran - Menemen (summer breakfast)
        6: '16',  // Temmuz - Macarons (light summer dessert)
        7: '15',  // Ağustos - Crème Brûlée (elegant summer)
        8: '13',  // Eylül - Ratatouille (harvest season)
        9: '17',  // Ekim - Tarte Tatin (fall apples)
        10: '14', // Kasım - Boeuf Bourguignon (fall comfort)
        11: '4'   // Aralık - Baklava (festive dessert)
    };

    const recipeId = seasonalRecipes[currentMonth];
    return recipes.find(r => r.id === recipeId) || recipes[0];
};

export function Home() {
    const { recipes, searchTerm } = useRecipes();
    const recipeOfTheMonth = getRecipeOfTheMonth(recipes);

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (recipe.cuisine && recipe.cuisine.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Bugün Ne Pişirsem?</h1>
                <p className="text-lg text-gray-600">En lezzetli tarifler, tam ölçülü malzemeler ve pratik yapılışlarıyla mutfağınızda.</p>
            </div>

            {/* Recipe of the Month */}
            {recipeOfTheMonth && !searchTerm && (
                <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-200">
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 animate-pulse">
                        <Sparkles className="h-4 w-4" />
                        Ayın Yemeği
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 p-8">
                        <div className="relative h-64 md:h-auto rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={recipeOfTheMonth.image}
                                alt={recipeOfTheMonth.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div>
                                <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-amber-700 rounded-full text-xs font-semibold shadow-sm">
                                    {recipeOfTheMonth.cuisine} · {recipeOfTheMonth.category}
                                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{recipeOfTheMonth.title}</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">{recipeOfTheMonth.description}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                    🕐 <strong>{recipeOfTheMonth.prepTime + recipeOfTheMonth.cookTime} dk</strong>
                                </span>
                                <span className="flex items-center gap-1">
                                    👥 <strong>{recipeOfTheMonth.servings} kişilik</strong>
                                </span>
                                <span className="flex items-center gap-1">
                                    ⭐ <strong>{recipeOfTheMonth.rating.toFixed(1)}</strong> ({recipeOfTheMonth.ratingCount})
                                </span>
                            </div>
                            <Link
                                to={`/recipe/${recipeOfTheMonth.id}`}
                                className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Tarifi Görüntüle →
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                    {searchTerm ? 'Arama Sonuçları' : 'Tüm Tarifler'}
                    <span className="text-gray-400 text-lg ml-2">({filteredRecipes.length})</span>
                </h2>

                {filteredRecipes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        <p className="text-xl">Aradığınız kriterlere uygun tarif bulunamadı.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
