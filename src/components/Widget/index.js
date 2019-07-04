import React from 'react';

export default class Widget extends React.Component {
	render() {
        return (
            <ul className="widget">
                {React.Children.map(this.props.children, child => (
                    <li className="widget_row">
                        {child}
                    </li>
                ))}
            </ul>
        );
    }
}