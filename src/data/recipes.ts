export interface Recipe {
  id: string;
  title: string;
  category: string;
  content?: string;
}

export const categories = [
  {
    id: 'bloque-1',
    title: 'Bizcochuelos y panes dulces',
    description: 'Texturas suaves, aromas caseros y combinaciones que perfuman la cocina.',
    icon: '🧁',
    color: 'from-amber-400 to-orange-500',
    image: '/images/bloque-1.jpg'
  },
  {
    id: 'bloque-2',
    title: 'Tortas y muffins fit',
    description: 'Tortas húmedas, muffins y budines que combinan placer con nutrición.',
    icon: '🎂',
    color: 'from-rose-400 to-pink-500',
    image: '/images/bloque-2.webp'
  },
  {
    id: 'bloque-3',
    title: 'Postres saludables y fríos',
    description: 'Alternativas ligeras y deliciosas para cerrar las comidas o disfrutar en verano.',
    icon: '🍮',
    color: 'from-cyan-400 to-blue-500',
    image: '/images/bloque-3.webp'
  },
  {
    id: 'bloque-4',
    title: 'Galletas, cookies y bocaditos',
    description: 'Crocantes, suaves o con chips… perfectas para acompañar un café o regalar.',
    icon: '🍪',
    color: 'from-yellow-400 to-amber-500'
  }
];

import { bloque1Recipes } from './bloque1-recipes';
import { bloque2Recipes } from './bloque2-recipes';
import { bloque3Recipes } from './bloque3-recipes';

export const recipes: Recipe[] = [
  // Bloque 1
  { id: 'b1-1', title: 'Bizcochuelo clásico de vainilla sin gluten', category: 'bloque-1', content: bloque1Recipes['b1-1'] },
  { id: 'b1-2', title: 'Bizcochuelo esponjoso de chocolate y almendra', category: 'bloque-1', content: bloque1Recipes['b1-2'] },
  { id: 'b1-3', title: 'Pan dulce de miel y canela', category: 'bloque-1', content: bloque1Recipes['b1-3'] },
  { id: 'b1-4', title: 'Pan de banana y nuez saludable', category: 'bloque-1', content: bloque1Recipes['b1-4'] },
  { id: 'b1-5', title: 'Pan de zanahoria con avena y coco', category: 'bloque-1', content: bloque1Recipes['b1-5'] },
  { id: 'b1-6', title: 'Pan de naranja y almendra glaseado', category: 'bloque-1', content: bloque1Recipes['b1-6'] },
  { id: 'b1-7', title: 'Bizcochuelo marmolado sin gluten', category: 'bloque-1', content: bloque1Recipes['b1-7'] },
  { id: 'b1-8', title: 'Pan dulce cítrico con semillas de amapola', category: 'bloque-1', content: bloque1Recipes['b1-8'] },
  { id: 'b1-9', title: 'Bizcochuelo de limón y yogur vegetal', category: 'bloque-1', content: bloque1Recipes['b1-9'] },
  { id: 'b1-10', title: 'Pan de manzana y canela', category: 'bloque-1', content: bloque1Recipes['b1-10'] },
  { id: 'b1-11', title: 'Pan dulce de coco y vainilla', category: 'bloque-1', content: bloque1Recipes['b1-11'] },
  { id: 'b1-12', title: 'Bizcochuelo proteico de claras y almendra', category: 'bloque-1', content: bloque1Recipes['b1-12'] },
  
  // Bloque 2
  { id: 'b2-1', title: 'Torta húmeda de cacao y remolacha', category: 'bloque-2', content: bloque2Recipes['b2-1'] },
  { id: 'b2-2', title: 'Muffins de zanahoria y nuez (sin azúcar)', category: 'bloque-2', content: bloque2Recipes['b2-2'] },
  { id: 'b2-3', title: 'Torta de almendra y naranja (sin lácteos)', category: 'bloque-2', content: bloque2Recipes['b2-3'] },
  { id: 'b2-4', title: 'Budín integral de avena y manzana', category: 'bloque-2', content: bloque2Recipes['b2-4'] },
  { id: 'b2-5', title: 'Muffins de arándanos sin harina de trigo', category: 'bloque-2', content: bloque2Recipes['b2-5'] },
  { id: 'b2-6', title: 'Torta "Red Velvet" saludable', category: 'bloque-2', content: bloque2Recipes['b2-6'] },
  { id: 'b2-7', title: 'Budín proteico de yogur y frutos secos', category: 'bloque-2', content: bloque2Recipes['b2-7'] },
  { id: 'b2-8', title: 'Torta de cacao y calabaza (sin mantequilla)', category: 'bloque-2', content: bloque2Recipes['b2-8'] },
  { id: 'b2-9', title: 'Mini tortas de coco y limón', category: 'bloque-2', content: bloque2Recipes['b2-9'] },
  { id: 'b2-10', title: 'Muffins de cacao y banana (sin azúcar refinada)', category: 'bloque-2', content: bloque2Recipes['b2-10'] },
  { id: 'b2-11', title: 'Budín de avena, pasas y miel', category: 'bloque-2', content: bloque2Recipes['b2-11'] },
  { id: 'b2-12', title: 'Torta húmeda de manzana y avena', category: 'bloque-2', content: bloque2Recipes['b2-12'] },
  
  // Bloque 3
  { id: 'b3-1', title: 'Mousse de chocolate sin azúcar (versión con aguacate)', category: 'bloque-3', content: bloque3Recipes['b3-1'] },
  { id: 'b3-2', title: 'Flan de coco y miel sin lácteos', category: 'bloque-3', content: bloque3Recipes['b3-2'] },
  { id: 'b3-3', title: 'Crumble de manzana sin harina de trigo', category: 'bloque-3', content: bloque3Recipes['b3-3'] },
  { id: 'b3-4', title: 'Brownies sin harina (con batata o porotos negros)', category: 'bloque-3', content: bloque3Recipes['b3-4'] },
  { id: 'b3-5', title: 'Tarta fría de yogur vegetal y frutos rojos', category: 'bloque-3', content: bloque3Recipes['b3-5'] },
  { id: 'b3-6', title: 'Budín frío de chía y vainilla', category: 'bloque-3', content: bloque3Recipes['b3-6'] },
  { id: 'b3-7', title: 'Postre "tres capas" de cacao, banana y crema vegetal', category: 'bloque-3', content: bloque3Recipes['b3-7'] },
  { id: 'b3-8', title: 'Trufas energéticas de cacao y dátiles', category: 'bloque-3', content: bloque3Recipes['b3-8'] },
  { id: 'b3-9', title: 'Cheesecake saludable sin horno', category: 'bloque-3', content: bloque3Recipes['b3-9'] },
  { id: 'b3-10', title: 'Copa cremosa de mango y coco', category: 'bloque-3', content: bloque3Recipes['b3-10'] },
  { id: 'b3-11', title: 'Mousse de maracuyá sin lácteos', category: 'bloque-3', content: bloque3Recipes['b3-11'] },
  { id: 'b3-12', title: 'Pudding de avena y cacao', category: 'bloque-3', content: bloque3Recipes['b3-12'] },
  
  // Bloque 4
  { id: 'b4-1', title: 'Cookies de avena y chips de chocolate sin gluten', category: 'bloque-4' },
  { id: 'b4-2', title: 'Galletas de almendra y miel', category: 'bloque-4' },
  { id: 'b4-3', title: 'Galletas de limón con glaseado ligero', category: 'bloque-4' },
  { id: 'b4-4', title: 'Cookies de mantequilla de maní (sin azúcar)', category: 'bloque-4' },
  { id: 'b4-5', title: 'Galletas integrales de avena y pasas', category: 'bloque-4' },
  { id: 'b4-6', title: 'Galletas de cacao y coco rallado', category: 'bloque-4' },
  { id: 'b4-7', title: 'Biscotti de almendra y naranja', category: 'bloque-4' },
  { id: 'b4-8', title: 'Galletas de canela y vainilla', category: 'bloque-4' },
  { id: 'b4-9', title: 'Cookies proteicas de avena y semillas', category: 'bloque-4' },
  { id: 'b4-10', title: 'Galletas festivas con especias', category: 'bloque-4' },
  { id: 'b4-11', title: 'Galletas suaves de manzana', category: 'bloque-4' },
  { id: 'b4-12', title: 'Bocaditos energéticos de dátil y cacao', category: 'bloque-4' }
];