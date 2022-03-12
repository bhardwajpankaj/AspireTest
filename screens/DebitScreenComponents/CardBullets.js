import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const CardBullets = (props) => (
    <View style={styles.container}>
            {/* bullet Views for hiding user card number */}
                <View style={styles.firstSet}>
                    <View style={styles.bullets}></View>
                    <View style={styles.bullets}></View>
                    <View style={styles.bullets}></View>
                    <View style={styles.bullets}></View>
                </View>
                <View style={styles.secondSet}>
                    <View style={styles.bullets}></View>
                    <View style={styles.bullets}></View>
                    <View style={styles.bullets}></View>
                    <View style={styles.bullets}></View>
                </View>
                <View style={styles.thirdSet}>
                    <View style={styles.bullets}></View>
                    <View style={styles.bullets}></View>
                    <View style={styles.bullets}></View>
                    <View style={styles.bullets}></View>
                </View>
                <Text style={styles.fourthSet}>{props.cardNumber.substring(12,16)}</Text>
    </View>
    )
export default CardBullets;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',marginTop:2
    },
    firstSet:{
        marginLeft: -4, 
        flexDirection: 'row', 
        width: 50
    },
    secondSet:{
        marginLeft: 20, 
        flexDirection: 'row', 
        width: 50
    },
    thirdSet:{
        marginLeft: 20, 
        flexDirection: 'row', 
        marginRight: 20, 
        width: 50
    },
    fourthSet:{
        color:'white', 
        fontWeight:'500', 
        fontSize:16, 
        width: 50, 
        letterSpacing: 2
    },
    bullets:{
        height: 8,
        width: 8,
        borderRadius: 8,
        margin: 2,
        backgroundColor: 'white',
    }
});