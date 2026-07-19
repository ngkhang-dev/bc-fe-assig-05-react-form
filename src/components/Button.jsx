const Button = (props) => {
  const {
    type = "button",
    className = "",
    onClick,
    children,
    disabled = false,
  } = props;

  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
