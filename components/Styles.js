
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    formContainer:{
        paddingTop: 20,
        paddingBottom: 40,
    },
    logo: {
        position: 'absolute',
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 27,
        textAlign: 'center',
        paddingTop: 200,
        color: '#3c4c96',
        fontFamily: 'Raleway-Bold',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        color: '#3c4c96',
        fontSize: 20,
        borderColor: '#3c4c96',
        borderWidth: 1,
        fontFamily: 'Raleway-Bold',
    },
    buttonContainer: {
        backgroundColor: '#2C2E6D',
        borderRadius: 20,
        paddingVertical: 15,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        fontFamily: 'Raleway-Bold',
    },
    forgotText: {
        fontSize: 17, 
        color: '#3c4c96',
        textAlign: 'center',
        padding: 10,
        fontFamily: 'Raleway-Bold',
    },
    alertText: {
        fontFamily: 'Raleway-Bold',
    },
    spinnerView: {
        marginBottom: 20,
        alignItems: 'center',
    },
    noListContainer: {
        flex: 1,
        marginTop: 10,
        marginBottom: 30,
        marginLeft: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noListText: {
        fontSize: 15,
        fontFamily: 'Raleway-Regular',
    },
    listViewContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listItemView:{
        paddingTop: 5,
    },
    listItemText: {
        fontSize: 15,
        fontFamily: 'Raleway-Regular',
    },
    homeView: {
        paddingBottom: 20,
    },
    iconView: {
        flexDirection: 'row',
    },
    scrollViewContainer: {
        backgroundColor: '#fff',
    },
    columnViewContainer: {
        flexDirection: 'column', 
        flex: 1, 
        borderWidth: 1, 
        borderColor: '#DBDBDB', 
        marginBottom: 20, 
    },
    firstColumnViewContainer: {
        flex: 1, 
        paddingTop: 20, 
        paddingBottom: 20, 
        paddingLeft: 20, 
        paddingRight: 20, 
        borderTopWidth: 1, 
        borderColor: '#DBDBDB',
    },
    columnTitleText: {
        fontFamily: 'Raleway-Bold', 
        fontSize: 17, 
        color: '#65697C', 
        fontStyle: 'italic', 
    },
    columnDescriptionText: {
        fontFamily: 'Raleway-Regular', 
        fontSize: 15,
    },
    columnGap:{
        flex: 1, 
        borderTopWidth: 1, 
        borderColor: '#DBDBDB',
    },
    columnNormal:{
        flex: 1, 
        paddingTop: 20, 
        paddingBottom: 20, 
        paddingLeft: 20, 
        paddingRight: 20, 
    },
    columnRowContainer:{
        flex:1, 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        paddingLeft: 20, 
        paddingRight: 20, 
    },
    columnRowContent: {
        width: '45%', 
        paddingTop: 20, 
        paddingBottom: 20,
    },
    columnRowGap: {
        width: '10%', 
        borderLeftWidth: 1, 
        borderColor: '#DBDBDB', 
    },
    pendingAcceptButton: {
        backgroundColor: '#2C2E6D', 
        borderRadius: 20,
        paddingLeft: 10, 
        paddingRight: 10, 
        marginLeft: 20, 
        marginRight: 20, 
        marginBottom: 20,
    },
    mapIcon: {
        marginLeft: 2, 
        textAlign: 'right',
    },
    columnAddressText: {
        width: '80%', 
        paddingTop: 20, 
        paddingBottom: 20,
    },
    columnAddressIcon: {
        width: '10%', 
        paddingTop: 20, 
        paddingBottom: 20,
        justifyContent:'center',
        alignItems: 'center',
    },
    historyView: {
        paddingBottom: 20,
        borderTopWidth: 1, 
        borderColor: '#DBDBDB',
    },
})