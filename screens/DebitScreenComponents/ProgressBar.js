import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { LinearProgress } from 'react-native-elements';
import Colors from '../../constants/colors'
import Strings from "../../constants/strings";
{/* Below component is creating linear progress bar and its corresponding view */}
const ProgressBar =(props) => {
    const numberWithCommas=(x)=> {
        if(x == null){return ""}
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={styles.subContainer}>
                    <View style={styles.header}>
                        <Text style={styles.titleLabel}>{Strings.debitSpendingLimt}</Text>
                        <View style={styles.labelsContainer}>
                            <Text style={styles.exhaustedLabel}>{'$'+numberWithCommas(props.limitExhausted)}</Text>
                            <Text style={styles.limitLabel}> | {'$'+numberWithCommas(props.totalLimit)}</Text>
                        </View>
                    </View>
                <LinearProgress color={Colors.AppGreenColor}
                        trackColor={Colors.AppGreenColor+'10'}
                        variant='determinate'
                        value={props.limitExhausted/props.totalLimit}
                        style={{height: 16, borderRadius: 32,marginBottom: 0}}
                    />
                </View>
            </View>
        );
}
export default ProgressBar;

const styles = StyleSheet.create({
    header: {
        marginBottom: 6, 
        flexDirection: 'row', 
        marginLeft: 0, 
        marginRight: 0, 
        alignContent:'space-between'
    },
    subContainer:{
        height: 39, marginLeft: 24, marginRight: 24, marginTop: 24
    },
    titleLabel:{
        color:'black', 
        fontWeight:'400', 
        fontSize:13, 
        alignSelf:'flex-start', 
        flex: 1
    },
    exhaustedLabel:{
        color:Colors.AppGreenColor,
        fontWeight:'400',
        fontSize:12
    },
    limitLabel:{
        color:'#222222', 
        fontWeight:'300', 
        fontSize:12
    },
    labelsContainer:{
        alignSelf:'flex-end',
        flexDirection: 'row'
    }
});