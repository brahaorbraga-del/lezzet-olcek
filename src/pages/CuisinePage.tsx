import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe } from 'lucide-react';
import { RecipeCard } from '../components/RecipeCard';
import { useRecipes } from '../context/RecipeContext';

export function CuisinePage() {
    const { cuisineName } = useParams<{ cuisineName: string }>();
    const { recipes } = useRecipes();

    const filteredRecipes = recipes.filter(recipe => recipe.cuisine === cuisineName);

    // Emoji mapping for cuisines
    const cuisineEmojis: Record<string, string> = {
        'Türk': '🇹🇷',
        'İtalyan': '🇮🇹',
        'Fransız': '🇫🇷'
    };

    const emoji = cuisineName ? cuisineEmojis[cuisineName] || '🌍' : '🌍';

    return (
        <div className="space-y-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group">
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Ana Sayfaya Dön</span>
            </Link>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            {cuisineName} Mutfağı
                            <span className="text-3xl">{emoji}</span>
                        </h1>
                        <p className="text-gray-600 mt-2">
                            {filteredRecipes.length} tarif bulundu
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="h-4 w-4" />
                    <span>Dünya mutfaklarından en sevilen tarifler</span>
                </div>
            </div>

            {filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-gray-500">
                    <p className="text-xl">Bu mutfaktan henüz tarif eklenmedi.</p>
                </div>
            )}
        </div>
    );
}
