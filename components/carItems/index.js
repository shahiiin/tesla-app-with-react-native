import React from "react";
import { View,Text,ImageBackground } from "react-native";
import StyleButton from "../styleButton";

import styles from "./style";


const CarItem = (props)=> {
    return(
  <View style={styles.carsContainer}>
         <ImageBackground style={styles.image} source={require('../../assets/images/ModelX.jpeg')}/>
       <View style={styles.titles}>
        <Text style={styles.title}>Modal S</Text>
        <Text style={styles.subtitle}>starting at 69.420$</Text>
       </View>
       <StyleButton 
       type='primary'
       content={'Custom order'}
       onPress ={() =>{
        console.warn('Custom order was pressed')
       }}
       />
       <StyleButton 
       type='secondary'
       content={'Existing inventory'}
       onPress ={() =>{
        console.warn('Existing inventory was pressed')
       }}
       />
     </View>
    )
}
export default CarItem