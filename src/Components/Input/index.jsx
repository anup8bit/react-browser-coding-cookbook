
import "./input.css";

const Input = ({
  className,
  id,
  onChange,
  label,
  name,
  placeholder,
  required,
  testId,
  type = "text",
  value,
}) => {
  const handleOnChange = () => {}

  return (
    <div className="input-container">
      <label>{label}</label>
      <div>
        <input
          className="input-field"
          value={value}
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          onChange={onChange}
          data-testId={testId}
          required={required}
        />
      </div>
    </div>
  )
}

export default Input;