import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pwdGenerator } from "../main/index.ts";
import "./App.scss";
import { publicRoutes } from "./routes/routeList";

function App() {
  console.log(pwdGenerator(20, 5, true, 15, 3));
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(({ path, component: Component, exact }, idx) => {
            return (
              <Route
                key={idx}
                path={path}
                exact={exact}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
