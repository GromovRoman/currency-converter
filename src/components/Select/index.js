import React from 'react';
import './style.css';

export default class Select extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			currencyOptions: null,
    };
  }
	setOptions() {
		let currencyOptions = [];

    if(this.props.currencies !== null) {
      let currencyKeys = Object.keys(this.props.currencies);

      currencyKeys.forEach(key => {
        currencyOptions.push(
          <option value={this.props.currencies[key].CharCode} key={key}>
            {this.props.currencies[key].Name}
          </option>
        );
      });
		}

		return currencyOptions;
	}
	componentDidMount() {
		this.setState(state => {
			return {
							currencyOptions: this.setOptions(),
						}
		});
	}
	render() {
		return(
			<select onChange={this.props.onChange} name="currencies" className="currencies" value={this.props.value}>
				{
					this.state.currencyOptions !== null && (this.state.currencyOptions.map(item => item))
				} 
			</select>
		);
	}
}