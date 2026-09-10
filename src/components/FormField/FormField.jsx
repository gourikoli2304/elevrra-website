export default function FormField({
  as = "input",
  type = "text",
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  rows = 5,
}) {
  const Tag = as;
  const describedBy = error ? `${id}-error` : undefined;

  const fieldClasses = `w-full bg-transparent border-b py-3.5 text-base text-paper placeholder:text-paper-mute/60 focus:outline-none transition-colors duration-200 ${
    error ? "border-red-400" : "border-line-strong focus:border-brass"
  }`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm text-paper-dim mb-2">
        {label}
        {required && <span className="text-brass"> *</span>}
      </label>
      <Tag
        id={id}
        name={id}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-invalid={!!error}
        aria-describedby={describedBy}
        className={fieldClasses}
      />
      {error && (
        <p id={describedBy} className="mt-2 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
