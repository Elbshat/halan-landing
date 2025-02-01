function FormInput({
  label,
  name,
  type,
  defaultValue,
  placeholder,
  className,
  variant,
}) {
  let content;
  if (variant === "textArea") {
    content = (
      <textarea
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
        rows={5}
        className="flex min-h-[100px] w-full rounded-2xl border border-[#DBDFD0] bg-transparent px-6 py-2 shadow-sm placeholder:text-[#737865] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
    );
  } else {
    content = (
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
        className="flex h-[60px] w-full rounded-[72px] border border-[#DBDFD0] bg-transparent px-6 py-1 shadow-sm transition-colors file:border-0 placeholder:text-[#737865] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
    );
  }
  return (
    <div className={className}>
      <label
        className="mb-2 inline-block capitalize font-bold peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor={name}
      >
        {label}
      </label>
      {content}
    </div>
  );
}

export default FormInput;
