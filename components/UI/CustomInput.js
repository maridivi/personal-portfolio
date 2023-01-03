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
      <Label label={label} />

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

export const TextArea = ({ label, onChange, inputName }) => {
  return (
    <div className="flex flex-col p-2 gap-1">
      <Label label={label} />
      <textarea
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

const Label = ({ label, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-electric-800">
      {label}
    </label>
  );
};
