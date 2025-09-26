import Image from "next/image";
import Link from "next/link";

export const MainFooter = () => {
    return (
        <footer className="border-base-300 border-t">
            <div className="divide-base-300 grid divide-x lg:grid-cols-2">
                <div className="divide-base-300 divide-y">
                    <div className="p-8 sm:p-10 md:px-16 xl:px-40 xl:py-16">
                        <div className="flex justify-between gap-8">
                            <Image
                                alt="Nusantara Aroma Craft Logo"
                                src='/images/logo/nac-logo-official-horizontal.png'
                                width={400}
                                height={150}
                            />
                        </div>
                    </div>

                    <div className="p-8 sm:p-10 md:px-16 xl:px-40 xl:py-16">
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
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

                <div className="order-first lg:order-last">
                    <form className="p-8 lg:p-20">
                        <div className="badge badge-ghost">Contact Us</div>
                        <h2 className="mt-4 text-2xl font-medium sm:text-3xl">Ready to Start Partnership?</h2>
                        <div className="mt-4 space-y-2 w-full">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Full Name</legend>
                                <label className="input w-full focus:outline-0">
                                    <span className="iconify lucide--user text-base-content/80 size-5"></span>
                                    <input className="grow focus:outline-0" placeholder="Your Name" type="text" />
                                </label>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Email Address</legend>
                                <label className="input w-full focus:outline-0">
                                    <span className="iconify lucide--mail text-base-content/80 size-5"></span>
                                    <input className="grow focus:outline-0" placeholder="your@email.com" type="email" />
                                </label>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Company</legend>
                                <label className="input w-full focus:outline-0">
                                    <span className="iconify lucide--building text-base-content/80 size-5"></span>
                                    <input className="grow focus:outline-0" placeholder="Company Name" type="text" />
                                </label>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Message</legend>
                                <label className="flex items-start gap-2">
                                    <textarea
                                        className="textarea textarea-bordered grow focus:outline-0 min-h-24 resize-none"
                                        placeholder="Bagaimana kami dapat membantu anda?"
                                    />
                                </label>
                            </fieldset>
                        </div>

                        <div className="mt-6 flex items-center gap-2">
                            <button className="btn btn-primary w-full btn-md">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="border-base-300 border-t px-8 py-4 text-center lg:px-40">
                <p className="text-sm text-base-content/60">
                    © 2025 Nusantara Aroma Craft. All rights reserved. |
                    Made with ❤️ for Indonesian Excellence
                </p>
            </div>
        </footer>
    );
};