import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { StyleSheet, View, SafeAreaView, Image, Dimensions, TouchableOpacity, Text,TextInput } from 'react-native'
import { setWeeklySpendingLimit, setWeeklySpendingLimitExhausted } from '../store/debitCardReducer';
import Colors from '../constants/colors'
import SpendingHeader from './SpendingLimitComponents/SpendingHeader';
import WeeklyView from './SpendingLimitComponents/WeeklyView';
const {width, height} = Dimensions.get('screen');
import Strings from '../constants/strings'
const SpendingLimitViewController = (props) => {
    let [number, onChangeNumber] = useState(null);
    let [isSaveButtonActive, setIsSaveButtonActive] = useState(false);
    const dispatchEvent = useDispatch();
    const presetValues = [5000, 10000, 20000]; 

    const saveButtonPress=()=> {
        if (number == null){ return; } 

        dispatchEvent(setWeeklySpendingLimit({
            weeklySpendingLimit: number
        }));
        // I am not using any api here so creating static exhausted limit entered number / 2, this can be updated via API
        dispatchEvent(setWeeklySpendingLimitExhausted({
            weeklySpendingLimitExhausted: number/2
        }));
      props.navigation.pop(); 
    }

    const onChangeUserChoice = (val) => {
        if(val == null || val.length == 0){
            setIsSaveButtonActive(false);
        }
        else{
            setIsSaveButtonActive(true);
        }
        onChangeNumber(val);
    }
    const numberWithCommas=(x)=> {
        if(x == null){return ""}
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <SafeAreaView style={styles.container}>
                <SpendingHeader props={props}></SpendingHeader>
                    
                        <View style={styles.subContainer}>
                        <View style={styles.popupHolder}>
                            <View style={styles.headerContainer}>
                                    {/* input */}
                                <View style={styles.headerTitleContainer}>
                                    {/* icon */}
                                    <Image style={styles.pickupVarStyle} source={require("../assets/pickup-car.png")} />
                                    <Text style={styles.spendingLimtLabel}>{Strings.weeklySpendingLimit}</Text>
                                </View>
                                <View style={styles.inputContainer}>
                                    {/* input */}
                                    <View style={styles.currencyUnit}>
                                        <Text style={styles.currencuUnitText}>{Strings.dollar}</Text>
                                    </View>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={onChangeUserChoice}
                                        onSubmitEditing={saveButtonPress}
                                        value={numberWithCommas(number)}
                                        placeholder="Amount"
                                        keyboardType="numeric"
                                        returnKeyType='done'
                                    />  
                                </View>
                                <View style={styles.border}></View>
                                <WeeklyView/>
                            </View>

                                {/* available choices */}
                                <View style={styles.choiceContainer}>
                                    <TouchableOpacity style={styles.choiceButton}
                                        onPress={() => {
                                            onChangeUserChoice(''+presetValues[0]);
                                        }}
                                    >
                                    <Text style={styles.buttonTitle}>{Strings.dollar +" "+numberWithCommas(presetValues[0])}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.choiceButton}
                                        onPress={() => {
                                            onChangeUserChoice(''+presetValues[1]);
                                        }}
                                    >
                                    <Text style={styles.buttonTitle}>{Strings.dollar + " "+numberWithCommas(presetValues[1])}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.choiceButton}
                                        onPress={() => {
                                            onChangeUserChoice(''+presetValues[2]);
                                        }}
                                    >
                                    <Text style={styles.buttonTitle}>{Strings.dollar + " "+numberWithCommas(presetValues[2])}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.saveButtonContainer}>
                                    <TouchableOpacity activeOpacity={0.0} style={isSaveButtonActive == true ? styles.saveButtonActive : styles.saveButtonDeActive}
                                        onPress={saveButtonPress}>
                                        <Text style={styles.saveText}>{Strings.save}</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                </View>
        </SafeAreaView>
    )
}

export default SpendingLimitViewController

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: Colors.AppThemeColorBlue,
        flex:1,
        flexDirection: 'column'
    },
    subContainer:{
        height: (4*height)/5, 
        backgroundColor:'#fff',
        borderTopLeftRadius: 24, 
        borderTopRightRadius: 24,
    },
    popupHolder:{
        marginTop: 0,
        flexDirection: 'column', 
        flex: 1,
        marginLeft: 24, 
        marginRight: 24
    },
    headerContainer:{
        marginTop: 32, 
        height: 122, 
        flexDirection: 'column'
    },
    headerTitleContainer:{ 
        marginTop: 0, 
        height: 19, 
        flexDirection: 'row'
    },
    inputContainer:{
        marginTop: 13, 
        height: 33, 
        flexDirection: 'row', 
        alignContent: 'flex-start'
    },
    input: {
        height: 33,
        marginLeft: 12,
        marginTop: -3.5,
        marginRight: 0,
        marginBottom: 0,
        borderWidth: 0,
        fontWeight: 'bold',
        fontSize: 24,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    buttonTitle:{
        fontSize: 12,
        fontWeight: '600',
        color: Colors.AppGreenColor
    },
    saveButtonActive: {
        height: 56,
       backgroundColor:Colors.AppGreenColor,
        alignItems:'center',
        justifyContent:'center',
    },
    saveButtonDeActive: {
        height: 56,
        backgroundColor:'#EEEEEE',
        alignItems:'center',
        justifyContent:'center',
    },
    pickupVarStyle:{
        width: 16,
        height: 16,
        resizeMode: "contain",
        marginRight:0,
    },
    spendingLimtLabel:{
        fontSize: 13, 
        fontWeight: '400', 
        marginLeft:8
    },
    currencyUnit:{
        backgroundColor:Colors.AppGreenColor, 
        borderRadius: 3, 
        width: 40, 
        height: 24, 
        alignItems:'center', 
        justifyContent:'center'
    },
    choiceButton:{
    borderRadius: 4,
    height: 40,
    width: (width-72)/3,
    alignItems:'center',
    justifyContent:'center', 
    marginRight: 12, 
    backgroundColor: 
    Colors.lightGreenColor
    },
    saveButtonContainer:{
        marginBottom: 150, 
        height: 56, 
        marginLeft: 33,
        marginRight: 33, 
        borderRadius: 30,
        overflow:'hidden'
    },
    currencuUnitText:{
        color:'#fff', 
        fontSize: 16, 
        fontWeight: '700'
    },
    saveText:{
        color:'#fff',
        fontSize: 16
    },
    border:{
        backgroundColor:'#E5E5E5', 
        height:0.5, 
        marginTop: 5
    },
    choiceContainer:{
        marginTop: 25, 
        height: 40, 
        flexDirection: 'row',flex:1
    }
})
