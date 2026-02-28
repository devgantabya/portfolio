import { useState, useEffect, useMemo } from "react";
import myImage from "../../assets/profilee.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(
    () => [
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      { name: "Skills", id: "skills" },
      { name: "Projects", id: "projects" },
      { name: "Education", id: "education" },
      { name: "Certificates", id: "certificates" },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      // Background change logic
      setScrolled(window.scrollY > 50);

      // Auto-navigation logic (Scroll Spy)
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed bg-black top-0 left-0 w-full z-100 px-4 md:px-6 py-2 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto h-16 px-6 rounded-full flex items-center justify-between transition-all duration-700 pointer-events-auto border ${
          scrolled
            ? "bg-black/10 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-[0.98]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Profile Section */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="h-10 w-10 rounded-full border-2 border-amber-500 overflow-hidden bg-zinc-900 group-hover:border-white transition-colors">
              <img
                src={myImage}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#0a0a0a] animate-pulse" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-black uppercase tracking-widest text-white leading-none">
              Gantabya
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-amber-500 font-bold">
              Open for roles
            </span>
          </div>
        </div>

        {/* Desktop Nav - Auto Highlighting */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-amber-500"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] bg-amber-500 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 rounded-full bg-amber-500 text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
          >
            Hire Me
          </button>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1 w-6 items-end"
          >
            <span
              className={`h-[2px] bg-white transition-all ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
            />
            <span
              className={`h-[2px] bg-white transition-all ${isOpen ? "opacity-0" : "w-4"}`}
            />
            <span
              className={`h-[2px] bg-white transition-all ${isOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-5"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-24 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 p-8" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 text-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-bold uppercase tracking-[0.3em] ${
                activeSection === item.id ? "text-amber-500" : "text-zinc-500"
              }`}
            >
              {item.name}
            </button>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
