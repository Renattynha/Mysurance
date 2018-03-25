import Colors from '../../themes/Colors'
import Styles from '../../themes/Styles'
export default {

    container: {
        flex: 1
    },
    bottomContainer: {
        height: 60,
        marginBottom: 64,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: Colors.navBarColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        ...Styles.priceBig
    },
    rowSeparator: {
        backgroundColor: Colors.greyBackgroundColor,
        height: 1,
        marginLeft: 4,
    },
    rowSeparatorHide: {
        opacity: 0.0,
    },
};