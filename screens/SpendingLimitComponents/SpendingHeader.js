import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import AppLogo from "../../components/AppLogo";
import Strings from "../../constants/strings";

// Spending limit screen header component
const SpendingHeader = (props) => (
    <View style={styles.HeaderComponent}>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { props.props.navigation.pop(); }} >
                <Image style={styles.backArrow} source={require("../../assets/arrowLeft.png")} />
            </TouchableOpacity>
            <View style={{flex:1}}></View>
                <AppLogo style={{marginRight:0}}></AppLogo>
            </View>
        <Text style={{color:'white', fontWeight:'bold', fontSize:24, flex: 1, height: 33}}>{Strings.spendingLimit}</Text>
    </View>
    )
export default SpendingHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'space-between',
        marginLeft: 0,
        marginRight: 0,
        flex: 1,
    },
    backArrow:{
        width: 25,
        height: 25,
        resizeMode: "contain",
        marginLeft:0,
    },
    HeaderComponent:{
        paddingLeft:24, 
        paddingRight: 24, 
        marginTop: 24, 
        height: Dimensions.get('screen').height/5, 
        flexDirection: 'column'
    },
});