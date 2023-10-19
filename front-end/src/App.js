import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
function App() {
  return (
    <Switch>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  );
}

export default App;
