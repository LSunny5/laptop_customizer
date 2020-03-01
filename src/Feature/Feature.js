import React from 'react';
import './Feature.css';
import FeatureChoice from '../FeatureChoice/FeatureChoice';


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class Feature extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
              
              
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    onChange={e => this.props.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
                  </label>
                </div>

              );
            });
      




            return (
                <FeatureChoice 
                    featureHash={featureHash}
                    feature={feature}
                    options={options}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                />
            );
          });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    };
}

export default Feature