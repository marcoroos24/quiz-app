import './index.css';
import Quiz from "./components/Quiz";

function App() {
  console.log("App component rendered");
  return (
    <div className="app-container">
      <h1>Marco's Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;