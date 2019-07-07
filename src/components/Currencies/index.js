import React from 'react';
import './style.css';

export default class Currencies extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			currencyOptions: null,
    };
  }
  mapCurrenciesToOptions() {
	let currencyOptions = [];

    if(this.props.options !== null) {
      let currencyKeys = Object.keys(this.props.options);

      currencyKeys.forEach(key => {
        currencyOptions.push(
          <option value={this.props.options[key].CharCode} key={key}>
            {this.props.options[key].Name}
          </option>
        );
      });
		}

		return currencyOptions;
	}
	componentDidMount() {
		this.setState(state => {
			return {
				currencyOptions: this.mapCurrenciesToOptions(),
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