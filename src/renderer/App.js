import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { publicRoutes } from "./routes/routeList";

function App() {
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
