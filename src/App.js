import React, { Component } from 'react';
import './App.css';

//added by Sunny Lee
import Header from './Header/Header';
import Feature from './Feature/Feature';
import Summary from './Summary/Summary';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Feature
            features={this.props.features}
            selected={this.state.selected}
            USCurrencyFormat={USCurrencyFormat}
            updateFeature={this.updateFeature}
          />
          <Summary
            USCurrencyFormat={USCurrencyFormat}
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;
