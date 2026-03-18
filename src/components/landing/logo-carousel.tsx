
"use client"

import Image from 'next/image';

const logos = [
    { src: "https://res.cloudinary.com/dsgtunivo/image/upload/v1757448620/10_2_xf8bxm.png", alt: "Brand 1" },
    { src: "https://res.cloudinary.com/dsgtunivo/image/upload/v1756971919/7copy_n9hqyd.png", alt: "Brand 2" },
    { src: "https://res.cloudinary.com/dsgtunivo/image/upload/v1756972244/10_dugwkb.png", alt: "Brand 3" },
    { src: "https://res.cloudinary.com/dsgtunivo/image/upload/v1756972244/9copy_hlnxul.png", alt: "Brand 4" },
    { src: "https://res.cloudinary.com/dsgtunivo/image/upload/v1757449778/R_5_npnoa5.png", alt: "Brand 5" },
    { src: "https://res.cloudinary.com/dsgtunivo/image/upload/v1757448620/8_2_qtjeeo.png", alt: "Brand 6" },
];

export function LogoCarousel() {
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section id="partners" className="py-4 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div
                    className="w-full inline-flex flex-nowrap overflow-hidden"
                >
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
                        {duplicatedLogos.map((logo, index) => (
                            <li key={index}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={140}
                                    height={50}
                                    className="max-w-none object-contain"
                                    data-ai-hint="partner logo"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
