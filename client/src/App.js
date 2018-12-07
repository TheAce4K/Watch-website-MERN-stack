import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Items from './components/items'
import ItemInfo from './components/itemInfo'
import NavBar from './components/navBar'
import SoldWatches from './components/soldWatches'
import About from './components/about'
import Contact from './components/contact'
import Service from './components/service'


class App extends Component {
      state = {
        name: "items",
        items: []
          }
  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(Items => this.setState({ items: Items }));
  }

itemsForSale;
itemsSold;
infoItemName;
infoItemPrice;
infoLinkName;
infoItemDescription;
soldItem;

  render() {
    this.itemsSold = this.state.items.filter(function(item){
      return item.sold === true;
    });
    this.itemsForSale = this.state.items.filter(function(item){
      return item.sold === false;
    });
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
      itemsSold={this.itemsSold}
      />
  )}/>
<Route path="/about" render={() => (<About/>)}/>
<Route path="/service" render={() => (<Service/>)}/>
<Route path="/contact" render={() => (<Contact/>)}/>
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

}
export default App;
