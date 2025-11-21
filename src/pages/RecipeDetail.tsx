import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ArrowLeft, ChefHat, Star, Minus, Plus, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import { useRecipes } from '../context/RecipeContext';

export function RecipeDetail() {
    const { id } = useParams();
    const { getRecipe, rateRecipe, toggleFavorite, favorites, userRatings } = useRecipes();
    const recipe = id ? getRecipe(id) : undefined;

    if (!recipe) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-900">Tarif bulunamadı</h2>
                <Link to="/" className="text-primary hover:underline mt-4 inline-block">Ana sayfaya dön</Link>
            </div>
        );
    }

    const [servings, setServings] = useState(recipe.servings);
    const [userRating, setUserRating] = useState<number | null>(() => {
        return id && userRatings[id] ? userRatings[id] : null;
    });
    const isFavorite = id ? favorites.includes(id) : false;

    useEffect(() => {
        setServings(recipe.servings);
        if (id && userRatings[id]) {
            setUserRating(userRatings[id]);
        } else {
            setUserRating(null);
        }
    }, [recipe.id, recipe.servings, id, userRatings]);

    const handleServingChange = (delta: number) => {
        const newServings = servings + delta;
        if (newServings >= 1 && newServings <= 20) {
            setServings(newServings);
        }
    };

    const scaleAmount = (amount: number) => {
        return (amount * servings) / recipe.servings;
    };

    const formatAmount = (amount: number) => {
        const scaled = scaleAmount(amount);
        return Number.isInteger(scaled) ? scaled : scaled.toFixed(1).replace(/\.0$/, '');
    };

    const scaleWeight = (weight: string) => {
        const match = weight.match(/^(\d+\.?\d*)\s*(.*)$/);
        if (!match) return weight;

        const [, numStr, unit] = match;
        const num = parseFloat(numStr);
        const scaledNum = scaleAmount(num);
        const formatted = Number.isInteger(scaledNum) ? scaledNum : scaledNum.toFixed(1).replace(/\.0$/, '');
        return `${formatted}${unit}`;
    };

    const handleRating = (score: number) => {
        if (id) {
            rateRecipe(id, score);
            setUserRating(score);
        }
    };

    const handleToggleFavorite = () => {
        if (id) {
            toggleFavorite(id);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-6 group">
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Tüm Tarifler</span>
            </Link>

            <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="relative h-96 bg-gradient-to-br from-orange-100 to-orange-50">
                    <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4">
                        <button onClick={handleToggleFavorite} className={cn("p-3 rounded-full backdrop-blur-sm transition-all duration-300 shadow-lg", isFavorite ? "bg-red-500 text-white hover:bg-red-600" : "bg-white/90 text-gray-600 hover:bg-white")}>
                            <Heart className={cn("h-6 w-6", isFavorite && "fill-current")} />
                        </button>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-4 py-1.5 bg-orange-100 text-primary rounded-full text-sm font-semibold">{recipe.category}</span>
                            <div className="flex items-center gap-1 text-gray-600">
                                <Star className="h-4 w-4 fill-current text-yellow-400" />
                                <span className="font-semibold text-sm">{recipe.rating.toFixed(1)} <span className="text-gray-400 font-normal">({recipe.ratingCount})</span></span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">{recipe.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-xl shadow-sm"><Clock className="h-5 w-5 text-primary" /></div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Hazırlık</p>
                                    <p className="text-lg font-bold text-gray-900">{recipe.prepTime} dk</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-xl shadow-sm"><ChefHat className="h-5 w-5 text-primary" /></div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Pişirme</p>
                                    <p className="text-lg font-bold text-gray-900">{recipe.cookTime} dk</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-xl shadow-sm"><Users className="h-5 w-5 text-primary" /></div>
                                <div>
                                    <p className="text-xs text-gray-500 font-medium">Porsiyon</p>
                                    <p className="text-lg font-bold text-gray-900">{recipe.servings} kişilik</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[1fr,1.5fr] gap-12">
                        <div className="space-y-6">
                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                                    <Users className="h-5 w-5 text-primary" />
                                    Porsiyon Ayarla
                                </h3>
                                <div className="flex items-center justify-between bg-white p-2 rounded-xl shadow-sm border border-orange-100">
                                    <button onClick={() => handleServingChange(-1)} className="p-2 hover:bg-orange-50 rounded-lg text-primary transition-colors disabled:opacity-50" disabled={servings <= 1}>
                                        <Minus className="h-5 w-5" />
                                    </button>
                                    <div className="text-center">
                                        <span className="block text-2xl font-bold text-gray-900">{servings}</span>
                                        <span className="text-xs text-gray-500 font-medium">Kişilik</span>
                                    </div>
                                    <button onClick={() => handleServingChange(1)} className="p-2 hover:bg-orange-50 rounded-lg text-primary transition-colors disabled:opacity-50" disabled={servings >= 20}>
                                        <Plus className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-4">Malzemeler</h3>
                                <ul className="space-y-3">
                                    {recipe.ingredients.map((ing, idx) => (
                                        <li key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                            <span className="text-gray-700 font-medium">{ing.name}</span>
                                            <div className="text-right">
                                                <span className="text-primary font-bold block">
                                                    {formatAmount(ing.amount)} <span className="text-sm font-normal text-gray-500">{ing.unit}</span>
                                                </span>
                                                {ing.weight && (
                                                    <span className="text-xs text-gray-400 font-medium">(~{scaleWeight(ing.weight)})</span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-gray-900 mb-6">Hazırlanışı</h3>

                            {recipe.cookingMethods && recipe.cookingMethods.length > 0 ? (
                                <div className="space-y-6">
                                    <div className="flex gap-2 overflow-x-auto pb-2">
                                        {recipe.cookingMethods.map((method, idx) => (
                                            <button key={idx} className="px-4 py-2 rounded-full bg-orange-100 text-primary font-medium text-sm whitespace-nowrap">
                                                {method.name} ({method.time})
                                            </button>
                                        ))}
                                    </div>

                                    {recipe.cookingMethods.map((method, idx) => (
                                        <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                            <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                                                <ChefHat className="h-5 w-5 text-orange-500" />
                                                {method.name}
                                            </h4>
                                            <p className="text-gray-500 text-sm mb-6">{method.description}</p>
                                            <div className="space-y-6">
                                                {method.steps.map((step) => (
                                                    <div key={step.order} className="flex gap-4 group">
                                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                            {step.order}
                                                        </div>
                                                        <div className="pt-1">
                                                            <p className="text-gray-600 leading-relaxed">{step.instruction}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {recipe.steps.map((step) => (
                                        <div key={step.order} className="flex gap-4 group">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-primary flex items-center justify-center font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                {step.order}
                                            </div>
                                            <div className="pt-1">
                                                <p className="text-gray-600 leading-relaxed text-lg">{step.instruction}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {recipe.storage && (
                                <div className="mt-10 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                                    <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                                        📦 Saklama Koşulları
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {recipe.storage.roomTemp && (
                                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-2xl">🏠</span>
                                                    <span className="font-semibold text-gray-800 text-sm">Oda Sıcaklığı</span>
                                                </div>
                                                <p className="text-gray-600 text-sm">{recipe.storage.roomTemp}</p>
                                            </div>
                                        )}
                                        {recipe.storage.fridge && (
                                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-2xl">🧊</span>
                                                    <span className="font-semibold text-gray-800 text-sm">Buzdolabı</span>
                                                </div>
                                                <p className="text-gray-600 text-sm">{recipe.storage.fridge}</p>
                                            </div>
                                        )}
                                        {recipe.storage.freezer && (
                                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-2xl">❄️</span>
                                                    <span className="font-semibold text-gray-800 text-sm">Dondurucu</span>
                                                </div>
                                                <p className="text-gray-600 text-sm">{recipe.storage.freezer}</p>
                                            </div>
                                        )}
                                    </div>
                                    {recipe.storage.tips && (
                                        <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
                                            <p className="text-gray-700 text-sm">
                                                <span className="font-semibold text-blue-600">💡 İpucu:</span> {recipe.storage.tips}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="mt-12 pt-8 border-t">
                                <h3 className="font-bold text-lg text-gray-900 mb-4">Bu tarifi puanla</h3>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button key={star} onClick={() => handleRating(star)} className="focus:outline-none transition-transform hover:scale-110">
                                            <Star className={cn("h-8 w-8 transition-colors", (userRating && star <= userRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400")} />
                                        </button>
                                    ))}
                                </div>
                                {userRating && (
                                    <p className="text-sm text-green-600 mt-2 font-medium animate-in fade-in">
                                        Teşekkürler! Puanınız: {userRating}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
