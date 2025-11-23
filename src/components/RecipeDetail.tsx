import { motion } from 'framer-motion';
import { ArrowLeft, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { categories } from '@/data/recipes';

interface Recipe {
  id: string;
  title: string;
  category: string;
  content?: string;
}

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail = ({ recipe, onBack }: RecipeDetailProps) => {
  const category = categories.find(c => c.id === recipe.category);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6 flex items-center justify-between no-print"
      >
        <Button
          onClick={onBack}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Button>
        <Button
          onClick={handlePrint}
          variant="outline"
          className="gap-2"
        >
          <Printer className="w-4 h-4" />
          Imprimir
        </Button>
      </motion.div>

      {/* Recipe Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="border-2">
          {category && (
            <div className={`h-3 bg-gradient-to-r ${category.color}`} />
          )}
          <CardHeader className="pb-4">
            <div className="flex items-start gap-4">
              {category && (
                <div className="text-5xl">
                  {category.icon}
                </div>
              )}
              <div className="flex-1">
                <CardTitle className="text-3xl mb-2 text-foreground">
                  {recipe.title}
                </CardTitle>
                {category && (
                  <p className="text-muted-foreground">
                    {category.title}
                  </p>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            {recipe.content ? (
              <div 
                className="text-foreground [&_h3]:text-foreground [&_h3]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:mb-6 [&_li]:text-foreground [&_.bg-accent\\/10]:bg-accent/10 [&_.bg-accent\\/10]:p-4 [&_.bg-accent\\/10]:rounded-lg [&_.bg-accent\\/10]:mt-4"
                dangerouslySetInnerHTML={{ __html: recipe.content }}
              />
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">
                  📝 Contenido de la receta próximamente
                </p>
                <p className="text-sm text-muted-foreground">
                  Esta receta está en proceso de ser agregada al recetario.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          header, footer {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RecipeDetail;