import React from 'react';
import './style.css';

export default class Item extends React.Component {
    render(){

        return(
            <ul className='item'>
                <li className='item__row'>
                    <dl className='item__fields'>
                        <dt className='item__key'>ключ</dt>
                        <dd className='item__data'>значение</dd>
                    </dl>
                </li>
            </ul>
        );
    }
}