import Image from "next/image";
import Link from "next/link";

export const MainFooter = () => {
    return (
        <footer className="border-base-300 border-t">
            <div className="p-8 sm:p-10 md:px-16 xl:px-40 xl:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div>
                        <Image
                            alt="Nusantara Aroma Craft Logo"
                            src='/images/logo/nac-logo-official-horizontal.png'
                            width={400}
                            height={150}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                        <div>
                            <h2 className="text-lg font-medium">Company</h2>
                            <div className="**:hover:text-primary mt-4 space-y-2 **:block **:transition-all">
                                <Link href="/">Home</Link>
                                <Link href="/about">About Us</Link>
                                <Link href="/contact">Contact Us</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Our Brands</h2>
                            <div className="**:hover:text-primary mt-4 space-y-2 **:block **:transition-all">
                                <Link href="/perfume">NAC perfume</Link>
                                <Link href="/perfume/collection">Collection</Link>
                                <Link href="/export-import">NAC Export</Link>
                                <Link href="/export-import/commodities">Commodities</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">Services</h2>
                            <div className="**:hover:text-primary mt-4 space-y-2 **:block **:transition-all">
                                <Link href="/export-import/services">Export Import</Link>
                                <Link href="/perfume">Custom perfume</Link>
                                <Link href="/contact">Business Partnership</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 py-4 text-center lg:px-40">
                <p className="text-sm text-base-content/60">
                    © 2025 Nusantara Aroma Craft. All rights reserved. |
                    Made with ❤️ for Indonesian Excellence
                </p>
            </div>
        </footer>
    );
};