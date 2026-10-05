'use client';

export default function Header() {
    return (
        <header className="py-6 px-8 border-b border-gray-100 flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wider">RMBR</h1>
            
            <div className="flex items-center gap-10">
                <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-600">
                    <a href="/our-story" className="hover:text-black transition-colors">Our Story</a>
                    <a href="/news" className="hover:text-black transition-colors">News</a>
                    <a href="/art" className="hover:text-black transition-colors">Art</a>
                    <a href="/store" className="hover:text-black transition-colors">Store</a>
                </nav>

                <div className="flex items-center gap-6 text-sm uppercase tracking-widest text-gray-600">
                    <button className="hover:text-black transition-colors">Search</button>
                    <button className="hover:text-black transition-colors">Cart (0)</button>
                </div>
            </div>
        </header>
    );
}