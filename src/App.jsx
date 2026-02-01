import useCounterStore from "./store/counterStore.js";
import "./App.css";
function App() {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div className="card">
      <h1>Zustand Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
