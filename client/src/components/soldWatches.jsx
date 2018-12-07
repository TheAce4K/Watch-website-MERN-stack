import React from 'react'
import PropTypes from 'prop-types'
import SoldItem from './soldItem'

class SoldWatches extends React.Component{

  render () {
const {itemsSold} = this.props
    return (
      <div className="sold-watches">
    <div className="items">
      {itemsSold.map(item =>
          <SoldItem
            key={item.id}
            item={item}
            />
        )}
    </div>
    </div>
    )
  }
}

export default SoldWatches;
