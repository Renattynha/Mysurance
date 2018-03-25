import Colors from '../../themes/Colors'
import Style from '../../themes/Styles'

export default {

  container: {
    flex: 1,
    backgroundColor: Colors.greyBackgroundColor,
  },
  centerText: {
    alignItems: 'center',
  },
  text: {
    marginTop: 150,
    flex: 1,
    textAlign: 'center',
    ...Style.title,
  },
  spinner: {
    marginTop: 20
  }
};
