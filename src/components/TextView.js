import React from 'react'
import { View, TextInput, Text } from 'react-native'
import Colors from '../themes/Colors'

import Styles from './styles/TextViewStyles'
import TextStyles from '../themes/Styles'

class TextView extends React.Component {


    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps);
      }

    static propTypes = {
        title: React.PropTypes.string,
        value: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        onValueChange: React.PropTypes.func,
        keyboardType: React.PropTypes.string,
    };

    defaultProps = {
        keyboardType: 'default'
    }

    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            value: props.value,
            placeholder: props.placeholder,
            keyboardType: props.keyboardType,
            changeValue: props.changeValue
        };
    }

    render() {
        return (
            <View style={Styles.scene}>
                <View style={{ height: 60 }}>
                    <Text style={[Styles.title, TextStyles.small]}> {this.state.title} </Text>
                    <TextInput
                        style={[Styles.input, TextStyles.paragraph]}
                        value={this.state.value}
                        placeholder={this.state.placeholder}
                        onChangeText={(text) => this.onValueChange(text)}
                        selectionColor={Colors.priceColor}
                        placeholderTextColor={Colors.titleColor}
                        keyboardType={this.state.keyboardType}
                        autoCorrect={false} />
                </View >
            </View >
        );
    }

    onValueChange(text) {
       
        if(!this.state.changeValue) {
            this.setState({ value: text });            
        }

        if (this.props.onValueChange) {
            this.props.onValueChange(text);
        }
    }
}

export default TextView;
