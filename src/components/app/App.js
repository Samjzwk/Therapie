import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import { Dot } from "../Spinner";
import {ThemeProvider} from '../../utils/context/ThemeContexte';

//ici nous faisons du code splitting avec une interface de supply, il permet ici de charger uniquement ce dont il a besoin

const fallBack = { fallback: <Dot /> };
const Home = loadable(() => import("../../routes/Home"), fallBack);
const Recipes = loadable(() => import("../../routes/Recipes"), fallBack);
const notFound = loadable(() => import("../../routes/notFound"), fallBack);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <ThemeProvider>
          <Route path="/recipes" component={Recipes} />
        </ThemeProvider>
        <Route component={notFound} />
      </Switch>
    </Router>
  );
}

export default App;
