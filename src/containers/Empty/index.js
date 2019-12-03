// @flow
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import CustomNavbar from '../../components/CustomNavbar';

class Empty extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomNavbar />
        <Text>Empty Screen</Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(Empty);
