import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text, Image, Dimensions, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import DebitCard from "./DebitCard";
import { selectWeeklySpendingLimit, setWeeklySpendingLimit, setWeeklySpendingLimitExhausted, selectWeeklySpendingLimitExhausted } from '../../store/debitCardReducer';
import ProgressBar from "./ProgressBar";
import Strings from "../../constants/strings";
const {height} = Dimensions.get('screen');
 
  // below function gives image for menu options
  const getImage=(title)=>{
    switch (title) {
      case "Top-up account":
        return require("../../assets/debitScreen/topup.png")
      case "Weekly spending limit":
        return require("../../assets/debitScreen/limit.png")
      case "Freeze card":
        return require("../../assets/debitScreen/freeze.png")
      case "Get a new card":
        return require("../../assets/debitScreen/transfer.png")
      case "Deactivated cards":
        return require("../../assets/debitScreen/deactive.png") 
      default:
        break;
    }
  }
const DebitOptions = (props) => {
    let spendingLimit = useSelector(selectWeeklySpendingLimit);
    let isSpendingLimitSet = (spendingLimit != null && spendingLimit > 0);
    let spendingLimitExhausted = useSelector(selectWeeklySpendingLimitExhausted);

    const dispatchEvent = useDispatch();
    const numberWithCommas=(x)=> {
      if(x == null){return ""}
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Data for showing menu
    const DATA = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Top-up account",
        description:"Deposit money to your account to use with card",
        buttonState:-1
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Weekly spending limit",
        description: isSpendingLimitSet ? "Your weekly spending limit is " + Strings.dollar + " " + numberWithCommas(spendingLimit) : "You haven't set any spending limit on card", // The subtitle of the menu Item
        buttonState:isSpendingLimitSet ? 1 : 0
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Freeze card",
        description:"Your debit card is currently active",
        buttonState:0
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d78",
        title: "Get a new card",
        description:"This deactivates your current debit card",
        buttonState:-1
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d79",
        title: "Deactivated cards",
        description:"Your previously deactivated cards",
        buttonState:-1
      }
    ];

    const hanldeCellClick =(item)=>{
      console.log("item......"+item)
      switch(item.id) {
        case "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba":
            break;
        case "3ac68afc-c605-48d3-a4f8-fbd91aa97f63":
            if(item.buttonState == 0){
                props.props.navigation.navigate('SpendingLimit'); // Open the Spending Limits screen
            }
            else if(item.buttonState == 1){
                // reset data
                dispatchEvent(setWeeklySpendingLimit({
                  weeklySpendingLimit: -1
              }));
              dispatchEvent(setWeeklySpendingLimitExhausted({
                  weeklySpendingLimitExhausted: -1
              }));
            }
            break;
        default:
            return
      }
    }
    const renderToggleButton = (buttonState) => {
      if(buttonState == -1){
          return (<View style={{display:'none'}}></View>); //Blank View
      }
      else if(buttonState == 0){
          return (
              <View style={{alignItems: 'flex-end',flex:1}}>
                  <Image style={{ width: 34, height: 20}} source={require("../../assets/toggle.png")} resizeMode='contain'/>
              </View>
          );
      }
      else if(buttonState == 1){
          return (
            <View style={{alignItems: 'flex-end',flex:1}}>
                  <Image style={{ width: 34, height: 20}} source={require("../../assets/activeToggle.png")} resizeMode='contain'/>
              </View>
          );
      }
    }
    const renderItem = ({ item }) => {
        return (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => hanldeCellClick(item)} style={styles.buttonStyle}>
                <Image source={getImage(item.title)} style={styles.cellImage}/>
                <View style={styles.labelContainer}>
                    <Text style={styles.titleLabel}>{item.title}</Text>
                    <Text style={styles.descriptionLabel}>{item.description}</Text>
                </View>
                {renderToggleButton(item.buttonState)}
            </TouchableOpacity>
          </View>
        );
      };
        
        return (
            <SafeAreaView style={{ top:0, bottom:0, ...styles.container}}>
                <FlatList
                  style={styles.table}
                  bounces={true}
                  showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                      <>
                          <View style={{alignItems: 'center'}}>
                              <View style={{backgroundColor:'transparent', flex: 1, height: height*0.35}}></View>
                              <DebitCard></DebitCard>
                          </View>
                          {isSpendingLimitSet === true ? (<ProgressBar limitExhausted={spendingLimitExhausted} totalLimit={spendingLimit}></ProgressBar>) : (<View style={{display:'none'}}></View>)}
                      </>
                  }
                  ListFooterComponent={ <View style={{backgroundColor: 'white', height: 100,marginTop:-1}}/>}
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  scrollEnabled={true}
                />
            </SafeAreaView>
        );
}
export default DebitOptions;

const styles = StyleSheet.create({
    
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top:0,
      bottom: 0,
      backgroundColor: 'transparent',
      width: '100%',
      flex: 1,
    },
    itemContainer: {
      backgroundColor: 'white',
      zIndex: -100, 
      marginTop: -1
  },
  buttonStyle:{
      flexDirection:'row',
      marginLeft:24,
      marginRight:24,
      height:41,
      marginTop: 22
  },
  cellImage:{
      width: 32, 
      height: 32, 
      resizeMode:'contain'
  },
  labelContainer:{
      marginLeft:12,
      marginRight:4,
      backgroundColor:'white',
      width:Dimensions.get('window').width - 130
  },
  titleLabel:{
      fontSize:14,
      color:'#25345F'
  },
  descriptionLabel:{
      fontSize:13,
      color:'#00000029',
      marginTop:2
  },
  table:{
      position: 'absolute',
      top:0,
      bottom: 0,
      backgroundColor: 'transparent',
      width: '100%',
      height: height-40,
      flex: 1,
  }
});