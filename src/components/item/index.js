import React from 'react';
import './style.css';
import { getItemData, getCurrencyData } from '../../getJsonData';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render(){
        let options = [];

        if(this.state.currency !== null) {
            let currencyKeys = Object.keys(this.state.currency);

            currencyKeys.forEach(key => {
                options.push(
                    <option value={this.state.currency[key].CharCode} key={key}>
                        {this.state.currency[key].Name}
                    </option>
                );
            });
        }
        
        if(this.state.item !== null) {
            return <ul className='item'>
                        <li className='item__row'>  
                            <dl className='item__fields'>
                                <dt className='item__key'>Название</dt>
                                <dd className='item__data'>{this.state.item.name}</dd>
                            </dl>
                        </li>
                        <li className='item__row'>  
                            <dl className='item__fields'>
                                <dt className='item__key'>Описание</dt>
                                <dd className='item__data'>{this.state.item.description}</dd>
                            </dl>
                        </li>
                        <li className='item__row'>  
                            <dl className='item__fields'>
                                <dt className='item__key'>Особенности/Характеристики</dt>
                                <dd className='item__data'>{this.state.item.features}</dd>
                            </dl>
                        </li>
                        <li className='item__row'>  
                            <dl className='item__fields'>
                                <dt className='item__key'>Цена</dt>
                                <dd className='item__data'>{this.state.currentPrice} {this.state.currentCurrency}</dd>
                            </dl>
                            { this.state.currency !== null ? (
                                <select onChange={this.changeCurrency} name="currency">
                                    {options.map(item => item)} 
                                </select>
                                ) : (null)
                            }
                        </li>
                    </ul>
        }
        return(
            null
        );
    }
}