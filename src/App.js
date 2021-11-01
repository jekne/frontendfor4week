import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <button onClick="Button">this is a button</button>
      </div>

      <Switch>
        <Route path="/loginpage" component={LoginPage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
