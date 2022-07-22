import React from "react";
import {View,Pressable,Text} from 'react-native'
import styles from "./style";

const StyleButton =(props)=> {

    const type = props.type;
     const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
     const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
    
    return ( 
        <View style={styles.container}>
          <Pressable
          style={[styles.button,{backgroundColor:backgroundColor}]}
          onPress={()=>{
          console.warn('hello')
         }}
        >
         <Text style={[styles.text,{color:textColor}]}>custom order</Text>
        </Pressable>
        </View>
     );
}

export default StyleButton;