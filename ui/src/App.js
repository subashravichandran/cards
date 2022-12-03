//import Axios from 'axois';
import {Header, Footer, LocationNotEnabled} from './components/commonComponents';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      locationEnabled: false
    }
  }

  componentDidMount = () => {
    if ("geolocation" in navigator) {
      this.setState({locationEnabled: true})
    } else {
      this.setState({locationEnabled: false})
    }
  }

  render() {
    return (
      <>
        {this.state.locationEnabled ?  
          <>
            <Header />
            <Footer/>
          </> : <LocationNotEnabled />
        }
      </>
    );
  }
}
