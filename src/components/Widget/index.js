import React from 'react';
import './style.css';

export default class Widget extends React.Component {
	render() {
		return (
			<div className="widget">
				{
					this.props.children
				}
			</div>
		);
	}
}