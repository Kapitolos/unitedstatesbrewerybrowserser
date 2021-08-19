import React from 'react';
import './brewresults.css';

class BrewResults extends React.Component {
    constructor(prov) {
        super(prov);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    
    
    render() 
    {
        console.log(this.props.props);
     
      return (
          <div id="brewlist">
          <h1>{this.props.props}</h1>
            <ol>
                {this.props.items.map(item => (
                    <a href={item.website_url} target="_blank">
                    <p key={item.id} id="brewtext">
                        {item.name} | {item.state}
                    </p>
                    </a>

                ))}
            </ol>
          </div>
        );
    
  }

}

  export default BrewResults;