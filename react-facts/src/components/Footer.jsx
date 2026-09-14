const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Integrations", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  ];

function Footer() {
    return (
    <footer className="bg-[#0C0A08] text-white p-12">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
      {footerLinks.map((section, index) => (
        <div key={index}>
          <h2 className="font-semibold text-lg mb-1">{section.title}</h2>
          <ul className="space-y-2 font-xs text-md font-medium text-[#B3B3B3]">
          {section.links.map((link, linkIndex) => (
            <li key={linkIndex}>
              <a href={link.href}
              className="hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        </div>
       
      ))}
    </div> 
    <div className="border-t border-zinc-800 mb-4"></div>

    {/* Copyright */}
    <p className="mt-4">
    &copy; {new Date().getFullYear()} Scrimba. All rights reserved.
    </p>
    </footer>
      
    )
}

export default Footer