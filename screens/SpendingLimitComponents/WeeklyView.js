import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import strings from "../../constants/strings";
const WeeklyView = () => {

return(
        <View style={styles.container}>
            <Text style={styles.label}>{strings.sevenDaysWeekly}</Text>
        </View>
    )
}
export default WeeklyView;

const styles = StyleSheet.create({
    container: {
        marginBottom: 0, 
        marginTop: 12.5, 
        height: 40, 
        maxWidth: 344, 
        flexDirection: 'row', 
        alignContent: 'flex-start'
    },
    label:{
        fontSize: 13, 
        fontWeight: '300', 
        color:'#22222266'
    }
});