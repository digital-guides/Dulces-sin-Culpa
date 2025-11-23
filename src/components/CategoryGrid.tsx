import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  image?: string;
}

interface CategoryGridProps {
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
}

const CategoryGrid = ({ categories, onCategorySelect }: CategoryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card 
            className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:scale-105 overflow-hidden group"
            onClick={() => onCategorySelect(category.id)}
          >
            <div className={`h-2 bg-gradient-to-r ${category.color}`} />
            {category.image && (
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-6xl drop-shadow-2xl">
                  {category.icon}
                </div>
              </div>
            )}
            {!category.image && (
              <div className="flex items-center justify-center h-48 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className={`text-8xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
              </div>
            )}
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl mb-2 text-foreground">
                {category.title}
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  12 recetas
                </span>
                <motion.div
                  initial={{ x: -5 }}
                  animate={{ x: 0 }}
                  transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                  className="text-primary"
                >
                  →
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryGrid;