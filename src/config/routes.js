import { Route, Switch } from "react-router-dom";
import { Rapper, Contact, About, IncomeandExpenses } from "../mainpage";
import { Eminem } from "../subpage";
import { Login } from "../Login";


const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/Rapper">
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
      <Route exact path="/Rapper/Eminem">
        <Eminem />
      </Route>
    </Switch>
  );
};

export default Routers;
