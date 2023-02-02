import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>Vite + React with javascript + Bootstrap 5</h1>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="testbox">column</div>
          </div>
          <div className="col">
            <div className="testbox">column</div>
          </div>
          <div className="col">
            <div className="testbox">column</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
