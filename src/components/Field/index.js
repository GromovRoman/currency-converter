import React from 'react';
import './style.css';

export default class Field extends React.Component {
	render() {
		return (
				<dl className='field'>
					<dt className='field__key'>{this.props.name}</dt>
					<dd className='field__data'>
						{this.props.value}
						{this.props.children}
					</dd>
				</dl>
		);
	}
}