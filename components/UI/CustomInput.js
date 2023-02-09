import Paragraph from "./Paragraph";

export default function CustomInput(props) {
  const {
    label,
    value,
    onChange,
    type,
    autoFocus,
    maxLength,
    minLength,
    min,
    isValid,
    errorMessage,
    inputName,
    id,
  } = props;
  return (
    <div className="flex flex-col p-2 gap-1">
      <label className="text-electric-800" htmlFor={id}>
        {label}
      </label>

      <input
        name={inputName}
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        autoFocus={autoFocus}
        required={true}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        className="rounded px-2 py-1 outline-none focus:ring ring-electric-500 bg-electric-300 border border-electric-500 text-white"
      />

      {isValid && <Paragraph>{errorMessage}</Paragraph>}
    </div>
  );
}

export const TextArea = ({ label, onChange, inputName, id }) => {
  return (
    <div className="flex flex-col p-2 gap-1">
      <label className="text-electric-800" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        rows="8"
        minLength={10}
        required
        name={inputName}
        onChange={onChange}
        className="rounded px-2 py-1 outline-none focus:ring ring-electric-500 bg-electric-300 border border-electric-500 text-white"
      ></textarea>
    </div>
  );
};
