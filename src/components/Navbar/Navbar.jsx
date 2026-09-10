import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../Button";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur border-b border-line">
      <nav
        className="container-content flex items-center justify-between py-5"
        aria-label="Primary"
      >
        <NavLink
          to="/"
          className="font-display font-extrabold text-lg tracking-wide text-paper"
        >
          ELEV RRA
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 text-sm text-paper-mute">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative py-1 transition-colors ${
                    isActive ? "text-brass" : "hover:text-paper"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary" icon={false} className="!py-3 !px-6 !text-xs">
            LET'S WORK TOGETHER
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-paper"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-line ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="container-content flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `block py-3 text-base ${
                    isActive ? "text-brass font-semibold" : "text-paper-dim"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-3">
            <Button to="/contact" variant="primary" className="w-full justify-center">
              LET'S WORK TOGETHER
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
