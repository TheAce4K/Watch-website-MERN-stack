import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Items from './components/items'
import ItemInfo from './components/itemInfo'
import NavBar from './components/navBar'
import SoldWatches from './components/soldWatches'


class App extends Component {
  state = {
    name: "items",
    items: [
      {id: 1, itemName: "Item Name1", itemPrice: 999, linkName:"Item-Name1", sold:false},
      {id: 2, itemName: "Item Name2", itemPrice: 999, linkName:"Item-Name2", sold:false},
      {id: 3, itemName: "Item Name3", itemPrice: 999, linkName:"Item-Name3", sold:false},
      {id: 4, itemName: "Item Name4", itemPrice: 999, linkName:"Item-Name4", sold:true},
      {id: 5, itemName: "Item Name5", itemPrice: 999, linkName:"Item-Name5", sold:true}
    ]
  }
   componentDidMount() {
     fetch('/users')
      .then(res => res.json())
      .then(Items => this.setState({ items: Items }));
    }


infoItemName;
infoItemPrice;
infoLinkName;
infoItemDescription;
soldItem;
  render() {
    console.log("his.state.items");
    console.log(this.soldItem);
console.log(this.itemsSold);
console.log(this.itemsForSale);

    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path={`/${this.infoLinkName}`} render={() => (
            <ItemInfo
              itemName={this.infoItemName}
              itemPrice={this.infoItemPrice}
              linkName={this.infoLinkName}
              itemDescription={this.infoItemDescription}
                />
  )} />
          <Route exact path="/" render={(routeProps) => (
            <Items
                items={this.itemsForSale}
                onItemLinkClick={this.handleItemLinkClick}
                />
  )} />
<Route path="/sold-watches" render={() => (
    <SoldWatches

      />
  )}></Route>
        </Switch>
        <main>

        </main>
      </div>
    );
  }



handleItemLinkClick = item  => {
  const items = [...this.state.items];
  const index = items.indexOf(item);
  const linkName = items[index].linkName;
  const itemName = items[index].itemName;
  const itemPrice = items[index].itemPrice;
  const itemDescription = items[index].itemDescription;
  this.infoItemName = itemName;
  this.infoItemPrice = itemPrice;
  this.infoLinkName = linkName;
  this.infoItemDescription = itemDescription;
}

itemsSold = this.state.items.filter(function(item){
  return item.sold === true;
});
itemsForSale = this.state.items.filter(function(item){
  return item.sold === false;
});


}

export default App;
