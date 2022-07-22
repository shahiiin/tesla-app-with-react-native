import React from "react";
import { View,Text,ImageBackground } from "react-native";
import styles from "./style";


const CarItem = ()=> {
    return(
  <View style={styles.carsContainer}>
         <ImageBackground style={styles.image} source={require('../../assets/images/ModelX.jpeg')}/>
       <View style={styles.titles}>
        <Text style={styles.title}>Modal S</Text>
        <Text style={styles.subtitle}>starting at 69.420$</Text>
       </View>
     </View>
    )
}
export default CarItem