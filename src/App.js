import React from 'react';
import './App.css';
import Widget from './components/Widget';
import Field from './components/Field';
import Select from './components/Select';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Widget>
                <Field name="Название" value={this.state.name} />
                <Field name="Описание" value={this.state.description} />
                <Field name="Особенности" value={this.state.name} />
                <Field
                    name="Валюта"
                    value={(
                        <Select values={currencyOptions} onChange={this.handleCurrencyChange} />
                    )}
                />
        </Widget>
      </div>
    );
  }
}
