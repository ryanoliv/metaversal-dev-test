interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <button
      className={`relative inline-flex items-center justify-center py-2 px-3.5 rounded-3xl font-extrabold transition-colors duration-500 ease-in-out overflow-hidden group ${
        variant === "primary"
          ? "bg-button-gradient-primary text-white100"
          : "border border-primaryDefault text-primaryDefault hover:bg-primary50"
      }`}
    >
      {variant === "primary" && (
        <>
          {/* Pseudo-element for hover state */}
          <span className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-button-gradient-primary-hover opacity-0 group-hover:opacity-100"></span>
        </>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
