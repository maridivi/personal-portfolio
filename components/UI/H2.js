export default function H2({ children, className = "" }) {
  return (
    <h2 className={`${className} text-xl sm:text-2xl font-chivo_mono`}>
      {children}
    </h2>
  );
}
