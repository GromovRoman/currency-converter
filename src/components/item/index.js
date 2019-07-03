import React from 'react';
import './style.css';
import { getItemData, getCurencyData } from '../../getJsonData';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            curency: null,
        };
    }
    componentDidMount() {
        getCurencyData()
        .then(curencyData => {
            this.setState({
                curency: curencyData,
            });
        });

        getItemData()
        .then(itemData => {
            this.setState({
                item: itemData,
            });
        });    
    }
    render(){
        let option = [];

        if(this.state.curency !== null) {
            for(var key in this.state.curency) {
                option.push(
                    <option value={this.state.curency[key].CharCode} key={key}>
                        {this.state.curency[key].Name}
                    </option>
                );
            }
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
                                <dd className='item__data'>{this.state.item.price} {this.state.item.curency}</dd>
                            </dl>
                            { this.state.curency !== null ? (
                                <select name="curency">
                                    {option.map(item => item)} 
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