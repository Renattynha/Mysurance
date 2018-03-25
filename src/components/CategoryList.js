
import React from "react"
import ReactNative from "react-native"
import CategoryCell from './CategoryCell'
import EmptyView from './EmptyView'
import I18n from '../l18n/I18n'

import Styles from './styles/InsuranceListStyles'

const { PropTypes } = React;

const {
    StyleSheet,
    View,
    ListView
} = ReactNative;

class CategoryList extends React.Component {

    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
        this.selectCategory = this.selectCategory.bind(this);

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
    }

    render() {

        var { categories } = this.props;

        this.dataSource = this.dataSource.cloneWithRows(categories.length != 0 ? categories : []);

        var content = this.dataSource.getRowCount() === 0 ?
            <EmptyView
                isLoading={this.props.isLoading}
                title={I18n.t('noCategories')}
            /> :
            <View style={Styles.container}>
                <ListView
                    style={Styles.container}
                    ref="listview"
                    renderSeparator={this.renderSeparator}
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    showsVerticalScrollIndicator={false} />
            </View>;
        return (<View style={Styles.container}>
            {content}
        </View>
        )
    }

    renderRow(category: Object, sectionID: number | string,
        rowID: number | string,
        highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void
    ) {
        return (
            <CategoryCell
                key={category.pageid}
                onSelect={() => this.selectCategory(category)}
                onHighlight={() => highlightRowFunc(sectionID, rowID)}
                onUnhighlight={() => highlightRowFunc(null, null)}
                category={category}
                selectedCategory={this.props.selectedCategory} />
        );
    }

    selectCategory(category: Object) {

        if(this.props.onSelect) (
            this.props.onSelect(category)
        )

        this.props.navigator.pop();
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

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedCategory: PropTypes.object
}

export default CategoryList;