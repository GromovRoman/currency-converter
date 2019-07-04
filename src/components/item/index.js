import React from 'react';
import './style.css';
import { getItemData, getCurencyData } from '../../getJsonData';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            curency: null,
            currentPrice: null,
            currentCurency: null,
        };
    }
    componentDidMount() {
        Promise.all([
            getItemData(),
            getCurencyData(),
        ])
        .then(([itemData, curencyData]) => {
            this.setState({
                item: itemData,
                curency: curencyData,
                currentPrice: itemData.price,
                currentCurency: itemData.curency
            });
        });   
    }
    changeCurency = (event) => {
        let recalculateСurrentPrices = this.state.item.price / this.state.curency[event.target.value].Value
        this.setState({
            currentPrice: recalculateСurrentPrices,
            currentCurency: event.target.value,
        });
    }
    render(){
        let options = [];

        if(this.state.curency !== null) {
            let curencyKeys = Object.keys(this.state.curency);

            curencyKeys.forEach(key => {
                options.push(
                    <option value={this.state.curency[key].CharCode} key={key}>
                        {this.state.curency[key].Name}
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
                                <dd className='item__data'>{this.state.currentPrice} {this.state.currentCurency}</dd>
                            </dl>
                            { this.state.curency !== null ? (
                                <select onChange={this.changeCurency} name="curency">
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