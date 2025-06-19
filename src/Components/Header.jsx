import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('hindi');

  const navItems = {
    hindi: [
      { name: "होम", path: "/" },
      { name: "चुनाव", path: "/election" },
      { name: "बिहार", path: "/bihar" },
      { name: "झारखंड", path: "/jharkhand" },
      { name: "देश", path: "/nation" },
      { name: "राजनीति", path: "/category/politics" },
      { name: "जुर्म", path: "/crime" },
      { name: "खेल", path: "/sports" },
      { name: "करियर", path: "/career" },
      { name: "लाइफ स्टाइल", path: "/lifestyle" },
      { name: "मूवी मसाला", path: "/category/entertainment" },
      { name: "धर्म", path: "/dharm" },
      { name: "कारोबार", path: "/category/business" }
    ],
    english: [
      { name: "Home", path: "/" },
      { name: "Elections", path: "/election" },
      { name: "Bihar", path: "/bihar" },
      { name: "Jharkhand", path: "/jharkhand" },
      { name: "Nation", path: "/nation" },
      { name: "Politics", path: "/category/politics" },
      { name: "Crime", path: "/crime" },
      { name: "Sports", path: "/sports" },
      { name: "Career", path: "/career" },
      { name: "Lifestyle", path: "/lifestyle" },
      { name: "Entertainment", path: "/category/entertainment" },
      { name: "Religion", path: "/dharm" },
      { name: "Business", path: "/category/business" }
    ]
  };

  const hindiMarqueeItems = [
    "बिहार: मुख्यमंत्री ने लॉन्च की नई योजना, 10 लाख लोगों को मिलेगा लाभ",
    "चुनाव आयोग ने जारी की नई गाइडलाइन्स, सभी पार्टियों को भेजा नोटिस",
    "झारखंड: खनन घोटाले में 3 अधिकारी गिरफ्तार, 50 करोड़ का घोटाला",
    "क्रिकेट: टीम इंडिया ने जीता T20 सीरीज, विराट कोहली को मिला मैन ऑफ द सीरीज अवार्ड",
    "बॉलीवुड: सलमान खान की नई फिल्म 'टाइगर 3' ने बनाया बॉक्स ऑफिस पर नया रिकॉर्ड"
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md notranslate">
      {/* Compact Language Toggle */}
      <div className="bg-gradient-to-r from-green-400 to-red-300 via-yellow-400  text-white text-xs py-1">
        <div className="container max-w-[1350px] mx-auto px-6 flex justify-end">
          <div className="flex items-center space-x-1">
            <button 
              onClick={() => setLanguage('hindi')}
              className={`px-2 py-0.5 rounded-sm ${language === 'hindi' ? 'bg-zinc-400 text-indigo-800 font-bold' : 'text-zinc-900'}`}
            >
              हिंदी
            </button>
            <button 
              onClick={() => setLanguage('english')}
              className={`px-2 py-0.5 rounded-sm ${language === 'english' ? 'bg-white text-indigo-800 font-bold' : 'text-zinc-900'}`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - Now with Full Visible Items */}
      <nav className="bg-gradient-to-r from-indigo-800 via-blue-700 to-indigo-800 text-white">
        <div className="container max-w-[1350px] mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 via-pink-500 to-indigo-600 text-white font-bold text-lg px-2.5 py-1.5 rounded-full shadow-lg group-hover:rotate-12 transition-transform duration-300">
                ✍️
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-yellow-300 transition-colors duration-300">
                Harshit ke Kalam se
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-300 tracking-wider group-hover:text-pink-300 transition-colors duration-300">
                {language === 'hindi' ? 'विचारों की अभिव्यक्ति' : 'Unleashing Thoughts'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Full Width with Scroll */}
          <div className="hidden md:flex flex-1 overflow-x-auto scrollbar-hide ml-6">
            <div className="flex space-x-6 mx-auto">
              {navItems[language].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="whitespace-nowrap hover:text-yellow-300 transition-colors duration-200 px-1 text-sm border-b-2 border-transparent hover:border-yellow-300 flex-shrink-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none p-1 rounded-full bg-white bg-opacity-10"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-800 to-blue-900 text-white">
          <div className="container mx-auto px-4 py-2 grid grid-cols-2 gap-2">
            {navItems[language].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="px-2 py-1.5 rounded hover:bg-indigo-700 transition-colors duration-200 text-xs"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Live Ticker with Hindi Content */}
      <div className="relative bg-gradient-to-r from-yellow-50 to-amber-50 border-t border-b border-gray-200 py-1.5 overflow-hidden">
        <div className="container mx-auto px-6 flex items-center relative">
          {/* LIVE Badge in Hindi */}
          <div className="flex-shrink-0 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-0.5 rounded-full font-medium mr-4 flex items-center border border-white shadow">
            <div className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></div>
            लाइव
          </div>

          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-amber-50 via-amber-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-amber-50 via-amber-50 to-transparent z-10" />

          {/* Hindi Marquee Content */}
          <div className="flex-1 whitespace-nowrap overflow-hidden">
            <div className="animate-marquee inline-flex space-x-12 min-w-full">
              {hindiMarqueeItems.map((item, index) => (
                <span key={index} className="text-gray-800 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
};

export default Header;