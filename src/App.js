import React from 'react';
import './App.css';
import Widget from './components/Widget';
import Field from './components/Field';
import Select from './components/Select';
import { getItemData, getCurrencyData } from './getJsonData';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      currencies: null,
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
      currencyData['RUB'] = {
                              CharCode: 'RUB',
                              Name: 'Российский рубль', 
                              Value: 1
                            };
      this.setState({
        item: itemData,
        currencies: currencyData,
        currentPrice: itemData.price,
        currentCurrency: itemData.currency
      });
    });   
  }
  onChangeCurrency = (event) => {
    let currentCharCode = event.target.value,
        newСurrentPrices = this.state.item.price / this.state.currencies[event.target.value].Value;

    this.setState({
        currentPrice: newСurrentPrices,
        currentCurrency: currentCharCode,
    });
  }
  render() {
    if(this.state.item === null)  return null

    return (
      <div className='App'>
        <Widget>
          <Field name="Название" value={this.state.item.name} />
          <Field name="Описание" value={this.state.item.description} />
          <Field name="Особенности" value={this.state.item.features} />
          <Field
            name="Валюта"
            value={[parseFloat(this.state.currentPrice).toFixed(2), ' ', this.state.currentCurrency]}
          >
            <Select currencies={this.state.currencies} 
                    onChange={this.onChangeCurrency} 
                    value={this.state.currentCurrency}
            />
          </Field>
        </Widget>
      </div>
    );
  }
}
