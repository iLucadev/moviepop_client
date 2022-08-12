import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const contentState = useSelector((state) => state.content);
  console.log(contentState);

  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
