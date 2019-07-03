import React from 'react';
import './App.css';
import Item from './item/';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Item />
      </div>
    );
  }
}
