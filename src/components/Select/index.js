import React from 'react';

export default class React extends React.Component {
    render() {
        return(
            <select onChange={this.changeCurrency} name="currency">
                {options.map(item => item)} 
            </select>
        );
    }
}