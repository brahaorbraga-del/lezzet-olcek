import React from 'react';
import { ChefHat, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const { categories, searchTerm, setSearchTerm } = useRecipes();

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-primary p-2 rounded-full">
                                <ChefHat className="h-6 w-6 text-white" />
                            </div>
                            <span className="font-bold text-xl text-gray-900">Lezzet Ölçek</span>
                        </Link>

                        <div className="hidden md:flex items-center gap-8">
                            <nav className="flex items-center gap-6">
                                <Link to="/" className="text-gray-600 hover:text-primary font-medium transition-colors">Tarifler</Link>

                                <div className="relative group">
                                    <button className="text-gray-600 hover:text-primary font-medium transition-colors flex items-center gap-1 py-2">
                                        Kategoriler
                                    </button>
                                    <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left z-20">
                                        {categories.map(category => (
                                            <Link
                                                key={category}
                                                to={`/category/${category}`}
                                                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-primary"
                                            >
                                                {category}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative group">
                                    <button className="text-gray-600 hover:text-primary font-medium transition-colors flex items-center gap-1 py-2">
                                        Dünya Yemekleri
                                    </button>
                                    <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left z-20">
                                        <Link
                                            to="/cuisine/Türk"
                                            className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-primary flex items-center gap-2"
                                        >
                                            <img src="https://flagcdn.com/w40/tr.png" alt="Türk" className="w-6 h-6 inline-block mr-1" />
                                            Türk Mutfağı
                                        </Link>
                                        <Link
                                            to="/cuisine/İtalyan"
                                            className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-primary flex items-center gap-2"
                                        >
                                            <img src="https://flagcdn.com/w40/it.png" alt="İtalyan" className="w-6 h-6 inline-block mr-1" />
                                            İtalyan Mutfağı
                                        </Link>
                                        <Link
                                            to="/cuisine/Fransız"
                                            className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-primary flex items-center gap-2"
                                        >
                                            <img src="https://flagcdn.com/w40/fr.png" alt="Fransız" className="w-6 h-6 inline-block mr-1" />
                                            Fransız Mutfağı
                                        </Link>
                                    </div>
                                </div>

                                <Link to="/favorites" className="text-gray-600 hover:text-primary font-medium transition-colors">Favorilerim</Link>
                            </nav>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Tarif ara..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64 transition-all"
                                />
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                        </div>

                        <button className="md:hidden p-2 text-gray-600">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            <footer className="bg-white border-t mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500">
                    <p>&copy; 2024 Lezzet Ölçek. Afiyet olsun!</p>
                </div>
            </footer>
        </div>
    );
}
