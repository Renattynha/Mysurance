import React from 'react'
import ReactNative from 'react-native'
import InsuranceList from '../components/InsuranceList'
import { connect } from 'react-redux'
import { fetchInsurances, removeInsurance } from '../actions/index'
import Styles from './styles/DefaultStyles'

const { PropTypes } = React;
const {
    View,
    StyleSheet
} = ReactNative;


class InsuranceScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.fetchInsurances(false);
    }

    render() {

        const { insurances, isLoading } = this.props;

        return (
            <View style={Styles.container}>
                <InsuranceList ref="insuranceList" {...this.props}>
                </InsuranceList>
            </View>
        );
    }
}

InsuranceScreen.propTypes = {
    insurances: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

function mapStateToProps(state, props) {
    const { insurances, isLoading } = state.insuranceData;

    return {
        insurances,
        isLoading
    };
}

export default connect(mapStateToProps, {
    fetchInsurances, removeInsurance
})(InsuranceScreen);