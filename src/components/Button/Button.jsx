import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Reusable Button.
 * - `as="link"` (default) renders an internal React Router <Link>.
 * - `as="a"` renders an external/native anchor.
 * - `as="button"` renders a native <button> (e.g. for form submit).
 *
 * variant: "primary" (brass fill) | "outline" (paper outline)
 */
export default function Button({
  children,
  to = "/",
  href,
  as = "link",
  variant = "primary",
  icon = true,
  type = "button",
  disabled = false,
  className = "",
  onClick,
}) {
  const base =
    "inline-flex items-center gap-2.5 px-7 py-4 text-sm font-bold tracking-wide font-body transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-brass text-bg hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,162,39,0.25)]",
    outline:
      "border border-line-strong text-paper hover:border-brass hover:text-brass",
  };

  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />}
    </>
  );

  if (as === "button") {
    return (
      <button type={type} disabled={disabled} onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  if (as === "a") {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
