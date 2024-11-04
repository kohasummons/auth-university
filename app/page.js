import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2">
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-16 rounded-lg text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center">
                <div className="text-lg font-semibold tracking-wider mb-4">AUTH UNIVERSITY</div>
                <h1 className="text-6xl font-extrabold leading-tight mb-4">The best way to learn Auth</h1>
              </div>
              {/* <div className="hero-image">
                <Image 
                  src="/auth-illustration.svg"
                  alt="Auth University Illustration"
                  width={400}
                  height={300}
                  priority
                  className="w-full h-auto"
                />
              </div> */}
            </div>
            <nav className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/my-learning" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                My learning
              </a>
              <a href="/courses" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                Course library
              </a>
              <a href="/paths" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                Learning path library
              </a>
            </nav>
          </div>
        </header>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Authentication Developer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/paths/getting-started" className="group block border border-gray-200 rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-gray-50 p-4">
                <h3 className="font-semibold">DEVELOPER</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Get started with Auth</h4>
                <p className="text-gray-600">Take the learning path →</p>
              </div>
            </a>
            <a href="/paths/advanced" className="group block border border-gray-200 rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-gray-50 p-4">
                <h3 className="font-semibold">DEVELOPER</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Advanced Auth Patterns</h4>
                <p className="text-gray-600">Take the learning paths →</p>
              </div>
            </a>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Auth Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/paths/oauth" className="group block border border-gray-200 rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-gray-50 p-4">
                <h3 className="font-semibold">OAUTH</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">OAuth & OpenID Connect</h4>
                <p className="text-gray-600">Take the learning path →</p>
              </div>
            </a>
            <a href="/paths/jwt" className="group block border border-gray-200 rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="bg-gray-50 p-4">
                <h3 className="font-semibold">JWT</h3>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">JWT Authentication</h4>
                <p className="text-gray-600">Take the learning path →</p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
