function FormInput({
  label,
  name,
  type,
  defaultValue,
  placeholder,
  className,
  variant,
  isRequired,
  onChange,
  value,
  disabled,
  message,
}) {
  let content;
  if (variant === "textArea") {
    content = (
      <textarea
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required
        rows={5}
        className="flex min-h-[100px] w-full resize-none rounded-2xl border border-[#DBDFD0] bg-transparent px-6 py-2 shadow-sm placeholder:text-[#737865] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    );
  } else {
    content = (
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        required
        className="flex h-[60px] w-full rounded-[72px] border border-[#DBDFD0] bg-transparent px-6 py-1 shadow-sm transition-colors file:border-0 placeholder:text-[#737865] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    );
  }
  return (
    <div className={className}>
      <label
        className="mb-2 inline-block font-bold capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor={name}
      >
        {label}
        {isRequired ? <span className="text-primary">&nbsp;&#42;</span> : ""}
      </label>
      {content}
      {message && <span className="ml-4 text-sm text-red-500">{message}</span>}
    </div>
  );
}

export default FormInput;
