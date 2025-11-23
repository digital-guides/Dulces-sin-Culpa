import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChefHat } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { categories, recipes } from '@/data/recipes';
import CategoryGrid from '@/components/CategoryGrid';
import RecipeList from '@/components/RecipeList';
import RecipeDetail from '@/components/RecipeDetail';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);

  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedRecipe(null);
  };

  const handleRecipeSelect = (recipeId: string) => {
    setSelectedRecipe(recipeId);
  };

  const handleBack = () => {
    if (selectedRecipe) {
      setSelectedRecipe(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PWAInstallPrompt />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary shadow-lg no-print">
        <div className="container mx-auto px-4 py-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <ChefHat className="w-8 h-8 text-primary-foreground" />
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Dulces sin Culpa
              </h1>
              <p className="text-sm text-primary-foreground/90">
                Sin gluten · Sin remordimientos
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!selectedCategory && !selectedRecipe && (
          <>
            {/* Intro Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center max-w-3xl mx-auto"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bienvenido al rincón más dulce de Recetas de Matilda. Aquí descubrirás que comer 
                saludable no significa renunciar al placer. Este recetario reúne creaciones 
                pensadas para disfrutar con el corazón tranquilo y el paladar feliz.
              </p>
            </motion.section>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar recetas por nombre..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card border-2 border-border focus-visible:ring-primary"
                />
              </div>
              {searchQuery && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-sm text-muted-foreground text-center"
                >
                  {filteredRecipes.length} receta{filteredRecipes.length !== 1 ? 's' : ''} encontrada{filteredRecipes.length !== 1 ? 's' : ''}
                </motion.p>
              )}
            </motion.div>

            {/* Categories or Search Results */}
            {searchQuery ? (
              <RecipeList
                recipes={filteredRecipes}
                onRecipeSelect={handleRecipeSelect}
                showCategory
              />
            ) : (
              <CategoryGrid
                categories={categories}
                onCategorySelect={handleCategorySelect}
              />
            )}
          </>
        )}

        {selectedCategory && !selectedRecipe && (
          <RecipeList
            recipes={recipes.filter(r => r.category === selectedCategory)}
            onRecipeSelect={handleRecipeSelect}
            onBack={handleBack}
            categoryTitle={categories.find(c => c.id === selectedCategory)?.title}
          />
        )}

        {selectedRecipe && (
          <RecipeDetail
            recipe={recipes.find(r => r.id === selectedRecipe)!}
            onBack={handleBack}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16 py-8 no-print">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Recetas de Matilda · Dulces sin Culpa
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Recetas sin gluten para disfrutar sin remordimientos
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;