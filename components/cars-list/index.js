import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import Cars from "./Cars";
import CarItem from "../carItems"
import styles from "./style";


const CarsList =() =>{


    return ( 

      <View style={styles.container}>
         <FlatList
        data={Cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
      </View>
     );
}

export default CarsList;