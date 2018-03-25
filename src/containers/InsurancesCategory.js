import React from 'react'
import ReactNative from 'react-native'
import CategoryList from '../components/CategoryList'
import { connect } from 'react-redux'
import { fetchInsuranceCategories } from '../actions/index'
import Styles from './styles/DefaultStyles'

const { PropTypes } = React;
const {
    View,
    StyleSheet
} = ReactNative;


class InsuranceCategory extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        this.props.fetchInsuranceCategories();
    }

    render() {

        const { categories } = this.props;

        return (
            <View style={Styles.container}>
                <CategoryList ref="categoryList" {...this.props}>
                </CategoryList>
            </View>
        );
    }
}

InsuranceCategory.propTypes = {
    categories: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedCategory: PropTypes.object
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
    fetchInsuranceCategories
})(InsuranceCategory);