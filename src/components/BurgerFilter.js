import React, { Component } from 'react';

export default class BurgerFilter extends Component {
  render(){
    return (
      <div className="BurgerFilter">
        <select>
          <option value="All">All</option>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
  }
}
