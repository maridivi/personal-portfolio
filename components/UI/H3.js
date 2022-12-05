export default function H3({ children, className = "" }) {
  return (
    <h3
      className={`${className} text-md sm:text-lg font-inter text-slate-300 `}
    >
      {children}
    </h3>
  );
}
