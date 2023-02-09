export default function H4({ children, className = "" }) {
  return (
    <h3
      className={`${className} text-md sm:text-lg font-inter text-slate-100 `}
    >
      {children}
    </h3>
  );
}
