import React from 'react'
import PropTypes from 'prop-types'
import Item from './item'

class Items extends React.Component {

  render () {
    const {items, onItemLinkClick} = this.props;
    return(
      <React.Fragment>
        <div className="banner">
          <img src=""alt=""/>
        </div>
      <h1 className="header">Watches</h1>
      <p className="header-subtext">Ut nam fore ingeniis, summis a quibusdam, quid occaecat sempiternum, litteris
        illustriora se quamquam. Iudicem est fugiat ullamco ita possumus amet dolor qui
        malis. Ab eram legam velit admodum, aute et ingeniis ea amet, ex commodo ad
        occaecat eu de quibusdam ea pariatur sed incurreret domesticarum te mentitum,
        </p>
      <div className="items">
        {items.map(item =>
            <Item
              key={item.id}
              onItemLinkClick={onItemLinkClick}
              item={item}
              />
          )}
      </div>
      <h1 className="header">About</h1>
      <div className="about-text">
      <p>Non fore incurreret coniunctione, irure voluptatibus incurreret elit probant.
        Appellat velit anim in anim, qui ab reprehenderit in dolore aliquip ut
        distinguantur qui ad nisi arbitror, velit ubi aliquip ita ipsum, noster possumus
        fidelissimae, constias ipsum minim mentitum labore, summis deserunt aut
        distinguantur. Aute voluptate transferremp</p>
      <img src="https://via.placeholder.com/500x250" alt=""/>
      </div>
</React.Fragment>

)
  }
}


export default Items;
