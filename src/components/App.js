import React from "react";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";

class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  addBurger = (burger) => {
    console.log("addB", burger);
    //1 - копия объекта state
    const burgers = { ...this.state.burgers };
    //2 - добавить новый бургер в переменную burgers
    burgers[`burgers${Date.now()}`] = burger;
    //3 - записать новый объект burgers в state
    this.setState({burgers})
  };
  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger" />
        </div>
        <Order />
        <MenuAdmin addBurger={this.addBurger} />
      </div>
    );
  }
}

export default App;
