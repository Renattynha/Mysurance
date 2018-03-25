import React from "react"
import ReactNative from "react-native"
import InsuranceScreen from '../containers/InsuranceScreen'
import Images from '../themes/Images'
import AddInsuranceScreen from '../containers/AddInsuranceScreen'
import Colors from '../themes/Colors'
import I18n from '../l18n/I18n'


let {
  NavigatorIOS,
  StyleSheet
} = ReactNative;

class App extends React.Component {

  handleNavigationRequest() {
    this.refs.nav.push({
      component: AddInsuranceScreen,
      title: I18n.t('add')
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        barTintColor={Colors.navBarColor}
        style={styles.container}
        tintColor={'white'}
        titleTextColor={'white'}
        translucent={false}
        initialRoute={{
          title: 'Insurances',
          component: InsuranceScreen,
          rightButtonIcon: Images.add,
          onRightButtonPress: () => this.handleNavigationRequest()
        }} >
      </NavigatorIOS>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.navBarColor
  }
});

export default App;
