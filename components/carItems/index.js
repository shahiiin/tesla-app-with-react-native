import React from "react";
import { View,Text,ImageBackground } from "react-native";
import StyleButton from "../styleButton";

import styles from "./style";


const CarItem = (props)=> {

const { name, tagline,taglineCTA, image } = props.car;

    return(
  <View style={styles.carsContainer}>
         <ImageBackground style={styles.image} source={image}/>
       <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
        <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
       </View>
         <View style={styles.buttonContainer}>
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
     </View>
    )
}
export default CarItem