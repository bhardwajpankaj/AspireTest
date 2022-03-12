import React from "react";
import { View, Dimensions,StyleSheet,Text,Image,TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { selectCardCVV, selectCardNumber, selectCardNumberVisible, selectCardValidThru, selectcardHolder, setCardNumberVisible } from '../../store/debitCardReducer';
import CardBullets from "./CardBullets";
import CardNumbers from "./CardNumbers";
import Strings from '../../constants/strings'
const {width} = Dimensions.get('screen');
const CARD_WIDTH = (width-48);
const CARD_HEIGHT = 0.6*CARD_WIDTH;
const DebitCard = () => {
    const dispatch = useDispatch();
    let cardDetailsDisplayed =  useSelector(selectCardNumberVisible);       //selectCardNumberVisible;
    let cardNumber = useSelector(selectCardNumber);                         //selectCardNumber;
    let cardValidThru = useSelector(selectCardValidThru);                   //selectCardValidThru;
    let cardCVV = useSelector(selectCardCVV);                               //selectCardCVV;
    let nameOnCard = useSelector(selectcardHolder);                         //selectNameOnCard;

        // Debit card view
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.displaycardButton} onPress={() => {
                        if(cardDetailsDisplayed){
                            dispatch(setCardNumberVisible({ numberVisible: false }));
                        }else{
                            dispatch(setCardNumberVisible({ numberVisible: true }));
                        }
                    }}>
                    <Image style={styles.iconImage} source={(cardDetailsDisplayed) ? require("../../assets/eyeClosed.png") : require("../../assets/eyeOpen.png")} resizeMode='contain' />
                    <Text style = {styles.buttonTitle} >
                        {(cardDetailsDisplayed) ? Strings.hideNumber : Strings.saveNumber} 
                    </Text>
                </TouchableOpacity>
                <View style={styles.cardContainer}>
                    <View style={styles.logoContainer}>
                        <Image style={{width: 75}} source={require("../../assets/AspireLogo.png")} resizeMode='contain'/>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.cardName}>
                            <Text style={styles.nameText}>{nameOnCard}</Text>
                        </View>
                        <View style={styles.cardNumberStyle}>
                            <View style={styles.cardNumberContainer}>
                                {(!(cardDetailsDisplayed != null && cardNumber != null)) ? (<View style={{display: 'none'}}/>)
                                    : cardDetailsDisplayed == true ? <CardNumbers cardNumber={cardNumber}></CardNumbers> : <CardBullets cardNumber={cardNumber}></CardBullets>
                                }
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.thruText}>Thru: {cardValidThru}</Text>
                                <Text style={styles.cvvText}>CVV: {(cardDetailsDisplayed) ? cardCVV : Strings.cvvHiddenBullet}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.visaLogo}>
                        <Image style={{width: 59}} source={require("../../assets/VisaLogo.png")} resizeMode='contain' 
                        />
                    </View>
                </View>
             <View style={styles.bgWhite} />
         </View> 
        );
    
}
export default DebitCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent', 
        width: CARD_WIDTH, 
        height: CARD_HEIGHT+32, 
        marginTop: -90
    },
    thruText:{
        color:'white', 
        fontWeight:'400', 
        fontSize:16
    },
    cvvText:{
        color:'white', 
        fontWeight:'400', 
        fontSize:15, 
        marginLeft: 10
    },
    iconImage: {
        height: 16,
        width: 16,
        marginRight: 6,
        marginTop:-8,
        marginLeft:12
    },
    bgWhite:{
        backgroundColor: 'white', 
        width: width, 
        height: 85, 
        borderTopRightRadius: 18, 
        borderTopLeftRadius: 18, 
        marginBottom: 0, 
        marginTop: -85, 
        marginLeft: -24, 
        marginRight: -24,
        zIndex:-10
    },
    displaycardButton:{
    backgroundColor: 'white', 
    alignSelf:'flex-end',
    flexDirection:'row',
    alignItems:'center', 
    width: 151, 
    height: 45, 
    borderTopRightRadius: 6, 
    borderTopLeftRadius: 6
    },
    buttonTitle:{
        color: "#01D167", 
        fontSize: 12, 
        fontWeight: "700",
        marginTop:-11
    },
    cardContainer:{
        backgroundColor: "#01D167", 
        width: CARD_WIDTH, 
        height: CARD_HEIGHT, 
        borderRadius: 10, 
        marginTop: -13, 
        padding: 0
    },
    logoContainer:{
        marginTop: 24, 
        height: 21, 
        marginRight: 24, 
        alignItems:'flex-end'
    },
    visaLogo:{
        marginBottom: 24, 
        marginRight: 24, 
        height: 20, 
        alignItems: 'flex-end'
    },
    card:{
        height: CARD_HEIGHT-90, 
        flexDirection:'column', 
        alignContent:'space-between'
    },
    cardName:{
        flex: 1, 
        justifyContent: 'center',
        marginLeft: 24
    },
    nameText:{
        color:'white', 
        fontWeight:'700', 
        fontSize:22
    },
    cardNumberStyle:{
        flex: 1, 
        marginLeft: 24, 
        alignContent: 'space-between'
    },
    cardNumberContainer:{
        height: 17, 
        flex: 1
    }
});