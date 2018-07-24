import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

export default class BurgerList extends Component {
  render(){
    return (
      <div className="BurgerList">
        { this.props.burgers.map((burger) => {
          return <BurgerItem key={burger.id} burger={burger} />
        }) }
      </div>
    )
  }
}
