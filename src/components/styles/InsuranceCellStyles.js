import Colors from '../../themes/Colors'
import Style from '../../themes/Styles'

export default {

    textContainer: {
        flex: 1,
    },
    row: {
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    cellImage: {
        height: 60,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15,
        width: 60,
    },
    title: {
        ...Style.title,
        marginLeft: 10,
        marginTop: 20
    },
    description: {
        ...Style.description,
        marginLeft: 10,
        marginTop: 5
    },
    prize: {
        ...Style.priceSmall,
        marginRight: 10,
        marginTop: 20
    }
};
