import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, Briefcase, Heart, ShoppingBag, Utensils, Car, Home, Smartphone } from 'lucide-react';

const categories = [
    { name: 'Home Services', icon: Home, href: '/categories/home-services' },
    { name: 'Professional Services', icon: Briefcase, href: '/categories/professional-services' },
    { name: 'Health & Wellness', icon: Heart, href: '/categories/health-wellness' },
    { name: 'Shopping', icon: ShoppingBag, href: '/categories/shopping' },
    { name: 'Food & Dining', icon: Utensils, href: '/categories/food-dining' },
    { name: 'Automotive', icon: Car, href: '/categories/automotive' },
    { name: 'Technology', icon: Smartphone, href: '/categories/technology' },
    { name: 'Repairs', icon: Wrench, href: '/categories/repairs' },
];

export default function CategoryBrowse() {
    return (
        <section className="py-16 bg-gray-50 border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find exactly what you need by exploring our most popular categories.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link key={category.name} href={category.href} className="group block">
                            <Card className="hover:shadow-lg transition-all duration-300 border-gray-200 group-hover:border-blue-200 h-full">
                                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                        <category.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {category.name}
                                    </h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
