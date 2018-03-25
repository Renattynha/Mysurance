
import React from "react"
import ReactNative from "react-native"
import { connect } from "react-redux"
import TextView from '../components/TextView'
import Colors from '../themes/Colors'
import Helper from '../helpers/helper'
import I18n from '../l18n/I18n'
import InsurancesCategory from './InsurancesCategory'
import Styles from './styles/AddInsuranceStyles'
import Images from '../themes/Images'
import { addInsurance } from '../actions/index'


const { PropTypes } = React;

const {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    Image,
    AlertIOS
} = ReactNative;

class AddInsuranceScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            insuranceTitle: '',
            insurancePrice: '',
            insuranceCategory: null
        }
    }

    onTitleChange(text) {
        this.setState({
            insuranceTitle: text
        });
    }

    onPriceChange(text) {
        this.setState({
            insurancePrice: text
        });
    }

    onCategorySelected(category) {

        this.setState({
            insuranceCategory: category
        })
    }

    addInsurance() {

        if(this.state.insuranceTitle && this.state.insurancePrice && this.state.insuranceCategory) {
            var insurance = {
                "id": Math.random(),
                "title": Helper.categoryNameFromString(this.state.insuranceCategory.title),
                "insurer": this.state.insuranceTitle,
                "prize": parseInt(this.state.insurancePrice),
                "currency": "CHF",
                "type": Helper.typeFromCategory(this.state.insuranceCategory)
            }
    
            this.props.addInsurance(insurance);
            this.props.navigator.pop();
        }else {
            AlertIOS.alert(
                I18n.t('appName'),
                I18n.t('addInsuranceError'),
                [{
                    text: I18n.t('ok'),
                    style: 'cancel',
                }]
            );
        }
    }

    openInsuranceCategories() {
        this.props.navigator.push({
            title: I18n.t('categories'),
            component: InsurancesCategory,
            passProps: {
                onSelect: (category) => { this.onCategorySelected(category) },
                selectedCategory: this.state.insuranceCategory
            }
        });
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={Styles.titleContainer}>
                        <TextView
                            selectionColor={Colors.priceColor}
                            placeholder={I18n.t('addInformation')}
                            onValueChange={(text) => this.onTitleChange(text)}
                            title={I18n.t('insurer')}
                            value={this.state.insuranceTitle} />
                    </View>
                    <View style={Styles.separator}>
                        <TextView
                            selectionColor={Colors.priceColor}
                            onValueChange={(text) => this.onPriceChange(text)}
                            placeholder={I18n.t('addInformation')}
                            keyboardType={'numeric'}
                            title={I18n.t('anualPrize')}
                            value={this.state.insurancePrice} />
                    </View>
                    <View style={Styles.separator}>
                        <TouchableHighlight onPress={() => this.openInsuranceCategories()} underlayColor='transparent'>
                            <View style={Styles.categoryContainer}>
                                <Text style={Styles.categoryText} > {this.state.insuranceCategory ? Helper.categoryNameFromString(this.state.insuranceCategory.title) : I18n.t('category')} </Text>
                                <Image style={Styles.image} source={Images.arrow} />
                            </View >
                        </TouchableHighlight>
                    </View>
                </View>
                <TouchableHighlight onPress={() => this.addInsurance()} underlayColor='transparent'>
                    <View style={Styles.bottomContainer}>
                        <Text style={Styles.button} > {I18n.t('save')} </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

function mapStateToProps(state, props) {
    const { insurances, isLoading, categories } = state.insuranceData;

    return {
        insurances,
        isLoading,
        categories
    };
}

export default connect(mapStateToProps, {
    addInsurance
})(AddInsuranceScreen);
