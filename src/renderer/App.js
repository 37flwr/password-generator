import { pwdGenerator } from "../main/index.ts";
import "./App.scss";

function App() {
  console.log(pwdGenerator(20, 5, true, 15, 3));
  return <div className="App"></div>;
}

export default App;
