import { Alert } from "react-bootstrap";

const Welcome = () => (
  <Alert className="text-center">
    <h1>Benvenuti in EpiBooks!</h1>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/e/e2/LA-Logo-libri-wiki.png"
      alt="libro"
      style={{ width: "40px" }}
    />
  </Alert>
);

export default Welcome;
