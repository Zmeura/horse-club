import "./button.scss";

function Button(props) {
  const { styles } = props;
  return (
    <button className="button" style={styles} onClick={props.funk}>
      {props.title}
    </button>
  );
}

Button.defaultProps = { title: "Записатись" };
export default Button;
