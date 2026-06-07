import './style.css'

document.querySelector('#app')!.innerHTML = `
  <div class="min-h-screen bg-gray-50 text-gray-900">

    <!-- NAVBAR -->
    <header class="flex items-center justify-between px-8 py-4 bg-white shadow">
      <h1 class="text-2xl font-bold text-blue-600">MySite</h1>

      <nav class="flex gap-6 text-sm font-medium">
        <a href="#" class="hover:text-blue-500">Home</a>
        <a href="#" class="hover:text-blue-500">Features</a>
        <a href="#" class="hover:text-blue-500">Pricing</a>
        <a href="#" class="hover:text-blue-500">Contact</a>
      </nav>

      <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Sign up
      </button>
    </header>

    <!-- HERO -->
    <section class="text-center py-20 px-6">
      <h2 class="text-5xl font-bold mb-6">
        Build modern websites with Tailwind 🚀
      </h2>

      <p class="text-gray-600 max-w-2xl mx-auto mb-8">
        This is a simple landing page built with Vite + TypeScript + Tailwind CSS.
        You can freely edit it and see live updates instantly.
      </p>

      <div class="flex justify-center gap-4">
        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
        <button class="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="grid md:grid-cols-3 gap-6 px-10 pb-20">

      <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 class="text-xl font-semibold mb-2">Fast Setup</h3>
        <p class="text-gray-600">Vite gives you instant dev server and hot reload.</p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 class="text-xl font-semibold mb-2">Modern UI</h3>
        <p class="text-gray-600">Tailwind lets you build designs without writing CSS.</p>
      </div>

      <div class="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 class="text-xl font-semibold mb-2">Flexible</h3>
        <p class="text-gray-600">Easy to extend and scale for real projects.</p>
      </div>

    </section>

    <!-- FOOTER -->
    <footer class="text-center py-6 text-gray-500 text-sm border-t">
      © 2026 MySite. Built with Vite + Tailwind.
    </footer>

  </div>
`