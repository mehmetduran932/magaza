import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import Dashboard from "./Dashboard";
import NotFound from "../common/NotFound"

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
          <Route path="/product" exact component={Dashboard}></Route>
          <Route path="/saveproduct/:productId" exact component={AddOrUpdateProduct}></Route>
          <Route path="/saveproduct/" exact component={AddOrUpdateProduct}></Route>
          <Route path="/cart" exact component={CartDetail}></Route>
          <Route exact component={NotFound}></Route>

        
      </Switch>
     
    </Container>
  );
}

export default App;
