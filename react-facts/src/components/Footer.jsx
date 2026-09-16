import { useState } from "react";

const footerLinks =[
  {
    title: "About us",
    links: [
      { name: "Careers", href: "#"},
      { name: "Pricing", href: "#"},
      { name: "API documentation", href: "#"},
      { name: "FAQ", href: "#"},
    ]
  },
  {
    title: "Products",
    links: [
      { name: "Frontend course", href: "#"},
      { name: "Product engineer course", href: "#"},
      { name: "Full-Stack course", href: "#"},
      { name: "Machine-learning course", href: "#"},
    ]
  },

  {
    title: "Solutions",
    links: [
      { name: "College graduate", href: "#"},
      { name: "Professionals", href: "#"},
      { name: "Career changes", href: "#"},
      { name: "Begineers", href: "#"},
    ]
  },

  {
    title: "Legals",
    links: [
      { name: "Privacy policy", href: "#"},
      { name: "Terms of service", href: "#"},
      { name: "Cookie policy", href: "#"},
      { name: "Refund policy", href: "#"},
    ],
  },
];

//  Social links

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
    ),
  },

  {
    name: "Github",
    href: "github.com/moo-farah",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
    ),
  },

  {
    name: "Linkedin",
    href: "linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },

  {
    name: "Youtube",
    href: "youtube.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
]

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  // Handle newsletter subscription
  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return

    console.log('Subscribe email:', email);
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  }
  return (
    <footer className="bg-linear-to-b from-gray-50 to gray-100 dark:from-gray-900 dark:to-gray-950 w-full">
      {/* NewSletter Section */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">Stay up to date</h3>
              <p className="text-gray-600 dark:text-gray-400">Get the latest updates, articles and resources delivered weekly.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2.5 rounded-lg border border-gray-300 outline-none"
              />
              <button className="px-6 py-2.5 bg-gray-950 text-white rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-gray-500/30 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Scrimba
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Learn to code interactively with our unique
              approach. Build real projects, get instant feedback, 
              and join a community of developers.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                key={index}
                href={social.href}
                aria-label={social.name}
                className="text-gray-500 hover:text-gray-700"
                >
                  {social.icon}

                </a>
              ))}
            </div>
          </div>
          {/* Link Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-gray-950 font-semibold text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:underline text-sm inline-flex items-center group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))} 
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
              &copy; {currentYear} Mohamed Farah. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
                Software as service.
              </span>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer