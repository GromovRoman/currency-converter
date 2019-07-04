import React from 'react';
import './style.css';

export default class Widget extends React.Component {
	render() {
		return (
			<div className="widget">
				{
					React.Children.map(this.props.children, child => (
						child
					))
				}
			</div>
		);
	}
}