import classes from "./App.module.css";
import { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
