import React from 'react';

export default class Field extends React.Component {
	render() {
		return (
			<>
				<dl className='field'>
					<dt className='field__key'>{this.props.name}</dt>
					<dd className='field__data'>{this.props.value}</dd>
				</dl>
				{this.props.children}
			</>
		);
	}
}