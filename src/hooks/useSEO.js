import { useEffect } from "react";

/**
 * Lightweight SEO hook: sets the document title and meta description
 * for the current page. Avoids pulling in react-helmet for a 5-page site.
 */
export default function useSEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}
