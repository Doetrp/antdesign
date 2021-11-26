import { Route, Switch } from "react-router-dom";
import { Rapper, Contact, About, IncomeandExpenses } from "../mainpage";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Rapper />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/IncomeandExpenses">
        <IncomeandExpenses />
      </Route>
    </Switch>
  );
};

export default Routers;
