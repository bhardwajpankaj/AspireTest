import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
const CardNumbers =(props) => {
        return (
            // Numbers text
            <View style={styles.container}>
                <Text style={styles.cardNumberStyle}>{props.cardNumber.substring(0,4)}</Text>
                <Text style={styles.subStringStyle}>{props.cardNumber.substring(4,8)}</Text>
                <Text style={styles.subStringStyle}>{props.cardNumber.substring(8,12)}</Text>
                <Text style={styles.subStringStyle}>{props.cardNumber.substring(12,16)}</Text>
            </View>
        );
}
export default CardNumbers;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    cardNumberStyle:{
        color:'white', 
        fontWeight:'500', 
        fontSize:16, 
        width: 50, 
        letterSpacing: 2
    },
    subStringStyle:{
        color:'white', 
        fontWeight:'500', 
        fontSize:16, 
        marginLeft: 20, 
        width: 50, 
        letterSpacing: 2
    }
});