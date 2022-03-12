import React from "react";
import { 
    Image,
    StyleSheet
} from "react-native";

const AppLogo =(props) => {
        return (
            <Image style={{...styles.logoStyle, ...props.style}} source={require("../assets/debitScreen/Logo.png")}/>
        );
}
export default AppLogo;

const styles = StyleSheet.create({
    logoStyle:{
        width: 25,
        height: 25,
        resizeMode: "contain",
    }
});