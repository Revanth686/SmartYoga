import { Metadata } from "next";
import ProductCard from "@/components/product-card";

export const metadata: Metadata = {
  title: "Products | SmartYoga",
  description: "Discover our innovative smart yoga products",
};

const products = [
  {
    id: 1,
    name: "Smart Yoga Mat",
    price: 199.99,
    category: "Mats",
    imageUrl:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=60",
    description:
      "Revolutionary smart mat with embedded sensors for real-time posture feedback and alignment correction.",
    benefits: [
      "Real-time posture correction",
      "Pressure point analysis",
      "Guided flow sequences",
      "Progress tracking",
    ],
  },
  {
    id: 2,
    name: "Smart Yoga Clothing Set",
    price: 149.99,
    category: "Apparel",
    imageUrl:
      "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&auto=format&fit=crop&q=60",
    description:
      "High-tech yoga wear with integrated sensors to track movement, muscle engagement, and form.",
    benefits: [
      "Real-time muscle activation feedback",
      "Posture monitoring",
      "Breathable fabric",
      "Machine washable",
    ],
  },
  {
    id: 3,
    name: "Smart Yoga Blocks",
    price: 79.99,
    category: "Props",
    imageUrl: "yogablock.webp",
    description:
      "Interactive yoga blocks with built-in sensors for balance and alignment feedback.",
    benefits: [
      "Balance assistance",
      "Pressure sensing",
      "LED indicators",
      "Rechargeable battery",
    ],
  },
  {
    id: 4,
    name: "Smart Resistance Bands",
    price: 89.99,
    category: "Props",
    imageUrl: "band.webp",
    description:
      "Connected resistance bands that measure tension and provide real-time feedback during workouts.",
    benefits: [
      "Variable resistance levels",
      "Force measurement",
      "Guided exercises",
      "Progress tracking",
    ],
  },
  {
    id: 5,
    name: "Smart Yoga Mirror",
    price: 999.99,
    category: "Equipment",
    imageUrl: "mirror.webp",
    description:
      "Interactive mirror display with AI-powered pose recognition and virtual instructor.",
    benefits: [
      "Live pose feedback",
      "Virtual classes",
      "Form correction",
      "Progress tracking",
    ],
  },
  {
    id: 6,
    name: "Smart Diffuser",
    price: 129.99,
    category: "Accessories",
    imageUrl: "diffuser.webp",
    description:
      "Connected aromatherapy diffuser that syncs with your practice sessions.",
    benefits: [
      "Automated aromatherapy",
      "Mobile app control",
      "Multiple scent pods",
      "Timer settings",
    ],
  },
  {
    id: 7,
    name: "VR Yoga Kit",
    price: 299.99,
    category: "Technology",
    imageUrl: "vr.webp",
    description:
      "Complete virtual reality yoga system with immersive environments and guided sessions.",
    benefits: [
      "Immersive environments",
      "Virtual instructor",
      "Progress tracking",
      "Multiplayer sessions",
    ],
  },
  {
    id: 8,
    name: "Meditation Headband",
    price: 199.99,
    category: "Technology",
    imageUrl: "meditationband.webp",
    description:
      "Brain-sensing headband for enhanced meditation and mindfulness practice.",
    benefits: [
      "EEG monitoring",
      "Guided meditation",
      "Sleep tracking",
      "Focus metrics",
    ],
  },
  {
    id: 9,
    name: "Smart Yoga Bolster",
    price: 149.99,
    category: "Props",
    imageUrl: "bolster.webp",
    description:
      "Adjustable smart bolster with pressure sensing and heating functionality.",
    benefits: [
      "Adjustable firmness",
      "Heat therapy",
      "Pressure mapping",
      "Washable cover",
    ],
  },
  {
    id: 10,
    name: "Smart Water Bottle",
    price: 49.99,
    category: "Accessories",
    imageUrl: "bottle.webp",
    description:
      "Connected water bottle that tracks hydration and reminds you to drink water during practice.",
    benefits: [
      "Hydration tracking",
      "Temperature sensing",
      "LED indicators",
      "Mobile app integration",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

