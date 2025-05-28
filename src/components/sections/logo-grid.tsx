import Image from 'next/image';

export default function LogoCloud() {
    // Define the logos as an array of objects for easier management
 const logos = [
        { src: '/logos/Bondwoods.svg', alt: 'Bondwoods Transport logo Australian freight and logistics company', heightPx: 24 },
        { src: '/logos/Churchhill.svg', alt: 'Churchill logo', heightPx: 24 },
        { src: '/logos/dawsons.svg', alt: 'Dawsons Haulage Logo', heightPx: 24 },
        { src: '/logos/Kearney.svg', alt: 'Kearney Transport logo', heightPx: 24 },
        { src: '/logos/Paclease.svg', alt: 'PacLease logo Commercial truck leasing and rental provider', heightPx: 24 },
        { src: '/logos/RTorange.svg', alt: 'RT Orange logo', heightPx: 24 },
        { src: '/logos/Scholz.svg', alt: 'Scholz Baulk Haulage', heightPx: 24 },
        { src: '/logos/Truckparts.svg', alt: 'Truck Parts Company logo Supplier of truck components and accessories', heightPx: 24 },
        { src: '/logos/twincity.svg', alt: 'Twin City Truck Centre Logo', heightPx: 24 },
        { src: '/logos/Killen.svg', alt: 'Killen Trucking logo Freight transport services company', heightPx: 24 },
        { src: '/logos/centurion.svg', alt: 'Centurion logo Australian logistics and transport provider', heightPx: 20 },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-center text-3xl font-bold sm:text-4xl lg:text-display-sm">Trucking companines we work with</h2>
                <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                    {logos.map((logo) => (
                        <Image
                            key={logo.alt} // Using alt text as a unique key for list rendering
                            className={`h-${logo.heightPx / 4} w-fit`}
                            src={logo.src} // Local path to public/logos folder
                            alt={logo.alt}
                            height={logo.heightPx} // Explicit pixel height for image rendering
                            width={logo.heightPx * 4} // Provide a width in pixels; adjust as needed
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}