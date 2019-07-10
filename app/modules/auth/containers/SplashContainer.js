import React, { Component } from 'react';
import SplashComponent from '../components/SplashComponent';

class SplashContainer extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const { navigation } = this.props;

    setTimeout(() => {
      navigation.navigate('auth');
    }, 2000);
  }

  render() {
    return <SplashComponent {...this.props} />;
  }
}

export default SplashContainer;
