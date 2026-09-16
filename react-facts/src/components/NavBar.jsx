const NavBar = () => {
  // Navigation links array for easier maintenance and mapping
  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Careers', href: '#careers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Docs', href: '#docs' },
  ];

  function handleClick(e) {
    console.log('Join now', e.target);
  }
  return (
   <header className="w-full border-b border-gray-100 sticky">
     <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
       <div className="flex items-center gap-2">
        <span className="text-xl font-medium tracking-tight text-gray-900">Scrimba</span>
       </div>

       {/* Navigation Links */}
       <nav className="hidden md:flex items-center gap-6">
        <ul className="flex items-center justify-center gap-6 text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}
              className="px-4 py-2 rounded-full hover:bg-gray-300/50"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
       </nav>

      {/* Action Button */}
      <div className="">
          <button onClick={handleClick} 
            type="button"
            className="bg-gray-950 text-white hover:bg-gray-700 px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow active:scale-95"
            >
            Join now
          </button>
      </div>
       
     </div>
   </header>
  )
}

export default NavBar