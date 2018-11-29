import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Items from './components/items'
import ItemInfo from './components/itemInfo'
import NavBar from './components/navBar'

class App extends Component {
  state = {
    name: "items",
    items: [
      {id: 1, itemName: "Item Name1", itemPrice: 999, linkName:"Item-Name1"},
      {id: 2, itemName: "Item Name2", itemPrice: 999, linkName:"Item-Name2"},
      {id: 3, itemName: "Item Name3", itemPrice: 999, linkName:"Item-Name3"}
    ]
  }

infoItemLinkName;
infoItemName;
infoItemPrice;

  render() {

    return (
      <div className="App">

        <Switch>

          <Route path={`/${this.infoItemLinkName}`} render={() => (
            <ItemInfo
              itemName={this.infoItemName}
              itemPrice={this.infoItemPrice}
                />
  )} />
          <Route exact path="/" render={(routeProps) => (
            <Items
                items={this.state.items}
                onAddToCart={this.handleAddToCart}
                onItemLinkClick={this.handleItemLinkClick}
                />
  )} />
        </Switch>
        <main>
        {/*  <Items
            items={this.state.items}
            onAddToCart={this.handleAddToCart}
            /> */}
        </main>
      </div>
    );
  }


handleAddToCart = itemId => {

}

handleItemLinkClick = item  => {
  const items = [...this.state.items];
  const index = items.indexOf(item);
  const linkName = items[index].linkName;
  const itemName = items[index].itemName;
  const itemPrice = items[index].itemPrice;
  this.infoItemLinkName = linkName;
  this.infoItemName = itemName;
  this.infoItemPrice = itemPrice;
}
}

export default App;
