export default function H3({ children, className = "" }) {
  return (
    <h3
      className={`${className} text-xl sm:text-xl font-inter text-slate-100 `}
    >
      {children}
    </h3>
  );
}
