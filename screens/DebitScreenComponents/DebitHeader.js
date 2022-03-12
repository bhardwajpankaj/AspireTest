import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { useSelector } from 'react-redux';
import { selectAvailableBalance } from '../../store/debitCardReducer';
import Color from '../../constants/colors'
import Strings from "../../constants/strings";

const DebitHeader = () => {
    let availableBalance = useSelector(selectAvailableBalance) ?? "";

    const numberWithCommas=(x)=> {
        if(x == null){return ""}
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // Debit Screen Header 
    return (
            <View style={styles.container}>
                    <Text style={styles.titleStyle}>{Strings.debitCard}</Text>
                    <Text style={styles.subTitleStyle}>{Strings.availableBalance}</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.currencyContainer}>
                            <Text style={styles.currencyLogo}>{Strings.dollar}</Text>
                        </View>
                        <Text style={styles.balanceLabel}>{numberWithCommas(availableBalance)}</Text>
                    </View>
            </View>
        );
}
export default DebitHeader;

const styles = StyleSheet.create({
    container: {marginLeft:24},
    titleStyle:{
        color:'white', 
        fontSize:24, 
        fontWeight:'bold'
    },
    subTitleStyle:{
        color:'white', 
        fontSize:14, 
        marginTop:24
    },
    currencyContainer:{
        backgroundColor:Color.AppGreenColor,
        width:40,
        height:24,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },
    currencyLogo:{
        color:'white',
        fontSize:12,
        fontWeight:'bold'
    },
    balanceLabel:{
        color:'white', 
        fontSize:24,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:12
    }
});