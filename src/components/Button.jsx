const Button = (props) => {
  const { type = "button", className, onClick, children } = props;

  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
