'use strict';

import React from 'react'
import ReactNative from 'react-native'
import Styles from './styles/InsuranceCellStyles'
import helper from '../helpers/helper'


const { PropTypes } = React;

const {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = ReactNative;


class InsuranceCell extends React.Component {

  render() {

    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onSelect}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onUnhighlight}>
          <View style={Styles.row}>
            <Image
              source={helper.getImagefromType(this.props.insurance)}
              style={Styles.cellImage}
            />
            <View style={Styles.textContainer}>
              <Text style={Styles.title} >
                {this.props.insurance.title}
              </Text>
              <Text style={Styles.description} >
                {this.props.insurance.insurer}
              </Text>
            </View>
            <View>
              <Text style={Styles.prize} >
                {this.props.insurance.prize + ' ' + this.props.insurance.currency}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

InsuranceCell.propTypes = {
  insurance: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onHighlight: PropTypes.func,
  onUnhighlight: PropTypes.func
}

export default InsuranceCell;