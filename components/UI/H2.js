export default function H2({ children, className = "" }) {
  return (
    <h2
      className={`${className} text-2xl sm:text-3xl font-bold font-inter text-yellow-300 `}
    >
      {children}
    </h2>
  );
}
