import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d3c6b4' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#2b352c' }} className="text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold">Handcrafted Haven</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/browse" className="hover:text-gray-300 transition-colors">Browse</Link>
            <Link href="/artisans" className="hover:text-gray-300 transition-colors">Artisans</Link>
            <Link href="/login" className="hover:text-gray-300 transition-colors">Login</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#b6a48c' }}>
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-6" style={{ color: '#2b352c' }}>
            Discover Unique Handcrafted Treasures
          </h2>
          <p className="text-xl mb-8 font-serif" style={{ color: '#695d47' }}>
            Supporting local artisans and their craftsmanship
          </p>
          <Link 
            href="/browse" 
            className="inline-block px-8 py-3 font-serif text-lg font-semibold text-white rounded-lg transition-colors"
            style={{ backgroundColor: '#8e511b' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#695d47'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8e511b'}
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center mb-12" style={{ color: '#2b352c' }}>
            Why Choose Handcrafted Haven?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#f8f5f0' }}>
              <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#8e511b' }}>Unique Items</h4>
              <p className="font-serif" style={{ color: '#695d47' }}>Discover one-of-a-kind pieces made with passion and skill</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#f8f5f0' }}>
              <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#8e511b' }}>Support Artisans</h4>
              <p className="font-serif" style={{ color: '#695d47' }}>Directly support independent makers and their craft</p>
            </div>
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: '#f8f5f0' }}>
              <h4 className="text-xl font-serif font-semibold mb-4" style={{ color: '#8e511b' }}>Quality Craftsmanship</h4>
              <p className="font-serif" style={{ color: '#695d47' }}>Each item is carefully handmade with attention to detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2b352c' }} className="text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="font-serif">&copy; 2024 Handcrafted Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}