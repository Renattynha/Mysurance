
import React from "react"
import ReactNative from "react-native"
import { connect } from "react-redux"
import InsuranceCell from './InsuranceCell'
import EmptyView from './EmptyView'
import Colors from '../themes/Colors'
import Helper from '../helpers/helper'
import I18n from '../l18n/I18n'
import Styles from './styles/InsuranceListStyles'

const { PropTypes } = React;

const {
    StyleSheet,
    View,
    Text,
    ListView,
    AlertIOS
} = ReactNative;

class InsuranceList extends React.Component {

    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
        this.selectInsurance = this.selectInsurance.bind(this);

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
    }

    render() {

        var { insurances } = this.props;
        this.dataSource = this.dataSource.cloneWithRows(insurances || []);

        var content = this.dataSource.getRowCount() === 0 ?
            <EmptyView
                isLoading={this.props.isLoading}
                title={I18n.t('noInsurances')}
            /> :
            <View style={Styles.container}>
                <ListView
                    style={Styles.container}
                    ref="listview"
                    renderSeparator={this.renderSeparator}
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    showsVerticalScrollIndicator={false} />
                <View style={Styles.bottomContainer}>
                    <Text style={Styles.textContainer} > {I18n.t('yearlyPremiums') + Helper.totalAnualPrice(insurances)} </Text>
                </View>
            </View>;
        return (<View style={Styles.container}>
            {content}
        </View>
        )
    }

    renderRow(insurance: Object, sectionID: number | string,
        rowID: number | string,
        highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void
    ) {
        return (
            <InsuranceCell
                key={insurance.id}
                onSelect={() => this.selectInsurance(insurance)}
                onHighlight={() => highlightRowFunc(sectionID, rowID)}
                onUnhighlight={() => highlightRowFunc(null, null)}
                insurance={insurance} />
        );
    }

    selectInsurance(insurance: Object) {

        var { insurances } = this.props;

        AlertIOS.alert(
            I18n.t('appName'),
            I18n.t('removeInsuranceMessage'),
            [{
                text: I18n.t('no'),
                style: 'cancel',
            },
            {
                text: I18n.t('yes'),
                onPress: () => this.props.removeInsurance(insurances, insurance),
            }]
        );
    }

    renderSeparator(sectionID: number | string, rowID: number | string, adjacentRowHighlighted: boolean) {
        var style = Styles.rowSeparator;
        if (adjacentRowHighlighted) {
            style = [style, Styles.rowSeparatorHide];
        }
        return (
            <View key={'SEP_' + sectionID + '_' + rowID} style={style} />
        );
    }
}

InsuranceList.propTypes = {
    insurances: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default InsuranceList;