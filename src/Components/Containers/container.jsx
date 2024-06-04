export default function Container(props) {
  const style = {
    backgroundColor: props.background,
    color: props.color,
    height: props.height,
    width: props.width,
    padding: props.padding || 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: props.flex,
    justifyContent: props.justify,
    alignItems: props.align,
    margin: props.margin || 0,
    transform: props.skew,
    flexWrap: props.wrap || "",
    borderRadius: props.radius,
    textAlign: props.textAlign,
  };
  return <div style={style}>{props.children}</div>;
}
