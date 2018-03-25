'use strict';

import React from 'react'
import ReactNative from 'react-native'
import helper from '../helpers/helper'
import Images from '../themes/Images'
import Styles from './styles/CategoryCellStyles'

const { PropTypes } = React;

const {
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} = ReactNative;

class CategoryCell extends React.Component {

    render() {
        return (
            <View>
                <TouchableHighlight
                    onPress={this.props.onSelect}
                    onShowUnderlay={this.props.onHighlight}
                    onHideUnderlay={this.props.onUnhighlight}>
                    <View style={Styles.row}>
                        <Text style={Styles.title} >
                            {helper.categoryNameFromString(this.props.category.title)}
                        </Text>
                        <Image style = {Styles.image} source={(this.props.selectedCategory && this.props.selectedCategory.pageid == this.props.category.pageid) ? Images.check : ''} />
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

CategoryCell.propTypes = {
    category: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    onHighlight: PropTypes.func,
    onUnhighlight: PropTypes.func,
    selectedCategory: PropTypes.object
}

export default CategoryCell;