import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
carsContainer:{
     width:"100%",
      height: Dimensions.get('window').height,
  },
  titles:{
   marginTop:"30%",
   alignItems:"center",
   width:"100%"

  },
  title:{
   fontSize:40,
   fontWeight:"500"
  },
  subtitle:{
  fontSize:12,
  color:"#5c5e62"
  },
  subtitleCTA:{
   textDecorationLine: 'underline',
  },
  image:{
      width:"100%",
     height:"100%",
     resizeMode:"cover",
     position:"absolute"
  },
  buttonContainer:{
     position: 'absolute',
     bottom: 50,
     width: '100%',
  }

});
export default styles