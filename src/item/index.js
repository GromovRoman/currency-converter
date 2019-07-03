import React from 'react';
import './style.css';
import getJsonData from '../getJsonData';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
        };
    }
    componentDidMount() {
        getJsonData()
        .then(jsonData => {
            this.setState({
                item: jsonData,
            });
        });    
    }
    render(){
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
                            <select name="curency">
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </li>
                    </ul>
        }
        return(
            null
        );
    }
}