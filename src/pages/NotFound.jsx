import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Volver al Home</Link>
    </div>
  );
}
