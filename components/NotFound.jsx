import { Link } from "react-router-dom";

const style = { position: "fixed", bottom: 0, right: 0, width: 400 };

export default function NotFound() {
  return (
    <div>
      <h1>Yikes, that’s a 404.</h1>
      <img style={style} src="../src/assets/404.webp" alt="" />
    </div>
  );
}
