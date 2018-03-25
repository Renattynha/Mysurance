import React from 'react'
import ReactNative from 'react-native'
import Styles from './styles/EmptyViewStyles'
import Colors from '../themes/Colors'


const {
  View,
  Text,
  StyleSheet
} = ReactNative;

const { PropTypes } = React;

class EmptyView extends React.Component {

  render() {
    return (
      <View style={[Styles.container, Styles.centerText]}>
        <Text style={Styles.text} > {this.props.isLoading ? 'Fetching...' : this.props.title}</Text>
      </View>
    );
  }
}

EmptyView.propTypes = {
  title: PropTypes.string.isRequired
}

export default EmptyView;