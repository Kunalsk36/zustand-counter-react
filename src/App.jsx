import "./App.css";
import CounterButton from "./components/CounterButton.jsx";
import CounterValue from "./components/counterValue.jsx";
function App() {
  return (
    <div className="card">
      <h1>Zustand Counter</h1>
      <CounterValue />
      <CounterButton />
    </div>
  );
}

export default App;
