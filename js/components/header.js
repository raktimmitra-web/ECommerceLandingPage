export const header = () => {
  return `
  <nav class="">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Left: Logo -->
        <div class="flex-shrink-0">
          <img class="h-16 w-auto" src="./assets/images/logo.png" alt="EcoKart Logo" />
        </div>

      
        <div class="hidden md:flex space-x-6">
          <a href="index.html" class="text-gray-700 hover:text-green-700 font-medium">Home</a>
          <a href="#about" class="text-gray-700 hover:text-green-700 font-medium">About</a>
          <a href="#features" class="text-gray-700 hover:text-green-700 font-medium">Services</a>
          <a href="#faqs" class="text-gray-700 hover:text-green-700 font-medium">FAQ</a>
          <a href="#footer-container" class="text-gray-700 hover:text-green-700 font-medium">Contact</a>
        </div>

       
        <div class="flex items-center space-x-8">
          <input type="text" placeholder="Search..." class="px-3 py-1 border rounded-md text-sm hidden sm:block" />
          
          <img src="./assets/images/profile_img_1.png" alt="Profile" class="w-8 h-8 rounded-full object-cover" />
          
          <button class="relative">
           <i class="fa-solid fa-heart"></i>
          </button>

          <button class="relative">
            <i class="fas fa-cart-shopping"></i>
            <span class="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">0</span>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button id="mobile-menu-toggle" class="text-gray-700 hover:text-green-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden px-4 pb-4">
      <a href="index.html" class="block py-2 text-gray-700 hover:text-green-700">Home</a>
      <a href="#about" class="block py-2 text-gray-700 hover:text-green-700">About</a>
      <a href="#features" class="block py-2 text-gray-700 hover:text-green-700">Services</a>
      <a href="#faqs" class="block py-2 text-gray-700 hover:text-green-700">FAQ</a>
      <a href="#footer-container" class="block py-2 text-gray-700 hover:text-green-700">Contact</a>
    </div> 
    <div class="sm:hidden w-full px-8 py-1">
        <input type="text" placeholder="Search..." class="px-3 py-2 border rounded-md text-sm  w-full" />
    </div>
    </nav>

    `;
  };
  
 