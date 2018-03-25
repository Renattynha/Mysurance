import Colors from '../../themes/Colors'
import Style from '../../themes/Styles'

export default {

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.greyBackgroundColor
    },
    bottomContainer: {
        height: 60,
        marginBottom: 84, // TRANSLUCENT FALSE VIEW INSETS WRONG ADD 64 (NAVIGATION HEIGHT)
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: Colors.navBarColor,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        marginTop: 30,
    },
    separator: {
        marginTop: 1
    },
    categoryContainer: {
        height: 60,
        backgroundColor: Colors.backgroundColor,
        alignItems: 'center',
        flexDirection: 'row'
    },
    categoryText: {
        marginLeft: 20,
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        ...Style.paragraph
    },
    image: {
        marginRight: 20
    },
    button: {
        ...Style.priceBig
    }
};