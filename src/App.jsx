import "./App.css";
import CounterButton from "./components/CounterButton.jsx";
import CounterValue from "./components/counterValue.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <Navbar />
      <div className="card">
        <h1>Zustand Counter</h1>
        <CounterValue />
        <CounterButton />
      </div>
    </>
  );
}

export default App;
