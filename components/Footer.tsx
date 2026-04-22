import Link from "next/link";

const footerLinks = {
  Solutions: [
    "Enterprise Learning",
    "Custom Programs",
    "Analytics Dashboard",
    "HR Integrations",
    "Certificates",
  ],
  Programs: [
    "Data Science & AI",
    "Product Management",
    "Leadership",
    "Business Analytics",
    "Cloud Computing",
  ],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: ["Case Studies", "Whitepapers", "Webinars", "L&D Playbook", "API Docs"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow">
                <span className="text-white font-display font-bold text-sm">A</span>
              </div>
              <div className="leading-none">
                <span className="font-display font-bold text-white text-base">Accredian</span>
                <span className="ml-1.5 text-xs font-semibold text-brand-400">Enterprise</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              India's most trusted enterprise learning platform. Upskill your workforce with programs
              from IITs, IIMs, and global universities.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-5">
              {["twitter", "linkedin", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-brand-500 flex items-center justify-center transition-colors"
                  aria-label={s}
                >
                  <div className="w-3.5 h-3.5 bg-gray-500 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-200 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Accredian. All rights reserved. Accredian is a registered trademark.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-600 hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
