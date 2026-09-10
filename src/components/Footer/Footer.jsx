import { Mail } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "../icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-content py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-8 border-b border-line">
          <div>
            <p className="font-display font-bold text-lg text-paper mb-2">
              ELEV RRA
            </p>
            <p className="text-paper-mute text-sm max-w-xs">
              Use creativity. Create impact. Drive growth.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-paper-mute">
            <a
              href="https://instagram.com/elevrra"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 hover:text-brass transition-colors"
              aria-label="Elevrra on Instagram"
            >
              <InstagramIcon size={16} />
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 hover:text-brass transition-colors"
              aria-label="Elevrra on LinkedIn"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:hello@elevrra.com"
              className="flex items-center gap-2 hover:text-brass transition-colors"
              aria-label="Email Elevrra"
            >
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <p className="pt-6 text-xs text-paper-mute">
          © 2026 Elevrra Marketing Agency. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
