import React from 'react'
import PropTypes from 'prop-types'
import Item from './item'

class Items extends React.Component {

  render () {
    const {items, onAddToCart, onItemLinkClick} = this.props;
    return(
      <div>
        {items.map(item =>
            <Item
              key={item.id}
              onAddToCart={onAddToCart}
              onItemLinkClick={onItemLinkClick}
              item={item}
              />
          )}
      </div>


)
  }
}


export default Items;
