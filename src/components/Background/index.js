import React from "react";
import  { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function Background({children}){
    const { secondary100, secondary75 } = theme.colors;
    return(
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary75]}
        >
            {children}
        </LinearGradient>
    )
}