import React, { useState,useEffect } from 'react'
import { View, StyleSheet,SafeAreaView } from "react-native";
import AppLogo from "../components/AppLogo";
import DebitHeader from "./DebitScreenComponents/DebitHeader";
import DebitOptions from "./DebitScreenComponents/DebitOptions";
import Colors from '../constants/colors'
import { useDispatch } from 'react-redux';
import { setCompleteCardDetails } from '../store/debitCardReducer';
import RequestHandler from "../Networking/RequestHandler";
import Loader from '../components/Loader'
let requestHandler = new RequestHandler();

const DebitCardViewController = (props) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getCardDetails("WQMR");
    }, []);

    const getCardDetails = async (id) => {
        if(id == null){
            return;
        }
        //Show Loader
        setLoading(true);
        var url = "https://jsonkeeper.com/b/"+id
        requestHandler.getData(url, (response) => {
            console.log(response)
            dispatch(
                setCompleteCardDetails(response)
            ); 
        //Hide Loader
        setLoading(false);
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Loader loading={loading} />
            <View style={styles.logoContainerStyle}>
                <AppLogo/>
            </View>
            <DebitHeader/>
            <DebitOptions props={props}/>
        </SafeAreaView>
    );
}
export default DebitCardViewController;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.AppThemeColorBlue,
    },
    logoContainerStyle:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 24,
        marginTop:24
    }
});