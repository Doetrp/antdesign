import { Route, Switch } from "react-router-dom";
import { Rapper, Contact, About, IncomeandExpenses } from "../mainpage";
import { Eminem, Drake, Logic, Lukasjoyner, Macklemore, NF, Postmalone } from "../subpage";
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
      <Route exact path="/Rapper/Drake">
        <Drake />
      </Route>
      <Route exact path="/Rapper/Logic">
        <Logic />
      </Route>
      <Route exact path="/Rapper/Lukasjoyner">
        <Lukasjoyner />
      </Route>
      <Route exact path="/Rapper/Macklemore">
        <Macklemore />
      </Route>
      <Route exact path="/Rapper/NF">
        <NF />
      </Route>
      <Route exact path="/Rapper/Postmalone">
        <Postmalone />
      </Route>
    </Switch>
  );
};

export default Routers;
