import { motion } from 'framer-motion';
import { ArrowLeft, CookingPot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/recipes';

interface Recipe {
  id: string;
  title: string;
  category: string;
}

interface RecipeListProps {
  recipes: Recipe[];
  onRecipeSelect: (recipeId: string) => void;
  onBack?: () => void;
  categoryTitle?: string;
  showCategory?: boolean;
}

const RecipeList = ({ recipes, onRecipeSelect, onBack, categoryTitle, showCategory }: RecipeListProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      {onBack && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Button
            onClick={onBack}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Button>
        </motion.div>
      )}

      {categoryTitle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {categoryTitle}
          </h2>
          <p className="text-muted-foreground">
            {recipes.length} receta{recipes.length !== 1 ? 's' : ''} disponible{recipes.length !== 1 ? 's' : ''}
          </p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recipes.map((recipe, index) => {
          const category = categories.find(c => c.id === recipe.category);
          return (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-primary group"
                onClick={() => onRecipeSelect(recipe.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <CookingPot className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {recipe.title}
                      </h3>
                      {showCategory && category && (
                        <p className="text-xs text-muted-foreground">
                          {category.icon} {category.title}
                        </p>
                      )}
                    </div>
                    <motion.div
                      initial={{ x: -5 }}
                      animate={{ x: 0 }}
                      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                      className="text-primary flex-shrink-0"
                    >
                      →
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeList;