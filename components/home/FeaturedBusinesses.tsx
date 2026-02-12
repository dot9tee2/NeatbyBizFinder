import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function FeaturedBusinesses() {
    return (
        <section className="py-16 bg-white border-b">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Local Businesses</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Highly rated professionals ready to help with your next project.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Featured 1: American Gutter Guards */}
                    <Link href="/businesses/american-gutter-guards" className="group block h-full">
                        <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-100 group-hover:border-blue-200">
                            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                <Image
                                    src="/american-gutter-guards/service-gutter-guards.png"
                                    alt="American Gutter Guards"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="group-hover:text-blue-600 transition-colors">American Gutter Guards</CardTitle>
                                <CardDescription className="flex items-center gap-1">
                                    <span className="text-yellow-500 font-bold">★ 4.9</span> (10+ Reviews)
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    Expert gutter guard installation and cleaning services in Chesapeake, VA.
                                </p>
                            </CardContent>
                            <CardFooter className="text-blue-600 text-sm font-medium mt-auto group-hover:underline">
                                View Services <ArrowRight className="ml-1 h-3 w-3" />
                            </CardFooter>
                        </Card>
                    </Link>

                    {/* Featured 2: NM Concrete Coating */}
                    <Link href="/businesses/nm-concrete-coating-pros" className="group block h-full">
                        <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-100 group-hover:border-blue-200">
                            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white font-bold text-2xl">
                                    NM
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="group-hover:text-blue-600 transition-colors">NM Concrete Coating Pros</CardTitle>
                                <CardDescription className="flex items-center gap-1">
                                    <span className="text-yellow-500 font-bold">★ 5.0</span> (Verified)
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    Premium concrete floor coatings for garages, patios, and commercial spaces.
                                </p>
                            </CardContent>
                            <CardFooter className="text-blue-600 text-sm font-medium mt-auto group-hover:underline">
                                View Services <ArrowRight className="ml-1 h-3 w-3" />
                            </CardFooter>
                        </Card>
                    </Link>

                    {/* Featured 3: RC Solutions */}
                    <Link href="/businesses/rc-solutions" className="group block h-full">
                        <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-gray-100 group-hover:border-blue-200">
                            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center text-white font-bold text-2xl">
                                    RC
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="group-hover:text-blue-600 transition-colors">RC Solutions</CardTitle>
                                <CardDescription className="flex items-center gap-1">
                                    <span className="text-yellow-500 font-bold">★ 4.8</span> (Verified)
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    Professional roofing and exterior renovation solutions for your home.
                                </p>
                            </CardContent>
                            <CardFooter className="text-blue-600 text-sm font-medium mt-auto group-hover:underline">
                                View Services <ArrowRight className="ml-1 h-3 w-3" />
                            </CardFooter>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    );
}
