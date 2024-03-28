// import React, { Component } from 'react';
// import './Certificate.css';
// import { exportComponentAsPNG} from "react-component-export-image";

//  class certificate extends Component {
//   certificateWrapper = React.createRef();
//     state = {
//         Name: 'DUMBESHWARI',
//         IQ :'40',
//       };
import React, { Component } from 'react';
import './Certificate.css';
import { exportComponentAsPNG } from "react-component-export-image";

class certificate extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: 'John Doe',
    IQ: '',
  };

  componentDidMount() {
    const { location } = this.props;

    if (location && location.state) {
      this.setState({
        Name: location.state.username, // Replace 'username' with the actual property name
        // IQ: location.state.score, // Replace 'score' with the actual property name
      });
    }
  }


  render() {
    return (
      <div className="Certi">
          <div className="Meta">
           <button onClick={e=>{ 
            e.preventDefault();
            exportComponentAsPNG(this.certificateWrapper);
            }}>Download</button>
        <div id="certificateWrapper" ref={this.certificateWrapper}>
          <p>{this.state.Name}</p>
          <p id="level">{this.state.IQ}</p>
          
           <img src="particpation.jpeg" alt="Certificate"  />
           
            </div>
            
        </div>
   </div>

    );
    
  }
}
export default certificate;