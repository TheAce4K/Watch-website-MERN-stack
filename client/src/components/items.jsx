import React from 'react'
import PropTypes from 'prop-types'
import Item from './item'

class Items extends React.Component {

  render () {
    const {items, onItemLinkClick} = this.props;
    return(
      <div id="items">
        {items.map(item =>
            <Item
              key={item.id}
              onItemLinkClick={onItemLinkClick}
              item={item}
              />
          )}
      </div>


)
  }
}


export default Items;
