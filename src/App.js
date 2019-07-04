import React from 'react';
import './App.css';
import Widget from './components/Widget';
import Field from './components/Field';
import Select from './components/Select';
import { getItemData, getCurrencyData } from '../../getJsonData';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      currency: null,
      currentPrice: null,
      currentCurrency: null,
    };
  }
  componentDidMount() {
    Promise.all([
        getItemData(),
        getCurrencyData(),
    ])
    .then(([itemData, currencyData]) => {
        this.setState({
            item: itemData,
            currency: currencyData,
            currentPrice: itemData.price,
            currentCurrency: itemData.currency
        });
    });   
  }
  changeCurrency = (event) => {
      let recalculateСurrentPrices = this.state.item.price / this.state.currency[event.target.value].Value
      this.setState({
          currentPrice: recalculateСurrentPrices,
          currentCurrency: event.target.value,
      });
  }
  render() {
    return (
      <div className='App'>
        <Widget>
                <Field name="Название" value={this.state.name} />
                <Field name="Описание" value={this.state.description} />
                <Field name="Особенности" value={this.state.name} />
                <Field
                    name="Валюта"
                    value={(
                        <Select values={currencyOptions} onChange={this.handleCurrencyChange} />
                    )}
                />
        </Widget>
      </div>
    );
  }
}
