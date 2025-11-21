import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { RecipeProvider } from './context/RecipeContext';

import { FavoritesPage } from './pages/FavoritesPage';
import { CategoryPage } from './pages/CategoryPage';
import { CuisinePage } from './pages/CuisinePage';

function App() {
  return (
    <RecipeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/cuisine/:cuisineName" element={<CuisinePage />} />
          </Routes>
        </Layout>
      </Router>
    </RecipeProvider>
  );
}

export default App;
