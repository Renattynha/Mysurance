import Colors from '../../themes/Colors'
import Style from '../../themes/Styles'

export default {

    row: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    title: {
        ...Style.title,
        marginLeft: 20,
        flex: 1
    },
    image: {
        marginRight: 20
    }
};
