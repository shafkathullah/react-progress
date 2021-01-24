import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ReferalEdit from "./pages/ReferalEdit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/referal/edit">
          <ReferalEdit />
        </Route>
        <Redirect to="/referal/edit" />
      </Switch>
    </Router>
  );
}

export default App;
