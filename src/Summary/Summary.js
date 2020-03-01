import React from 'react';
import SummaryOption from '../SummaryOption/SummaryOption'
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import './Summary.css';

class Summary extends React.Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            return (
                <SummaryOption
                    feature={feature}
                    featureHash={featureHash}
                    selectedOption={selectedOption}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            );
        });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <SummaryTotal
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    selected={this.props.selected}
                />
            </section>
        );
    }
}

export default Summary