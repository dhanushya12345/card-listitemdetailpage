import React from 'react';
import {  StyleSheet ,Image,View,Text} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import color from '../app/colors/Config';
import{MaterialCommunityIcons} from '@expo/vector-icons';

const ListItem = () => {
    const {landscape} = useDeviceOrientation()
   
    return (
        <View style={[styles.container,{marginTop:landscape?'1%':'20%'}]}>
            <View>
     <Image  style={styles.image} source={require('../assets/favicon.png')}/></View>

     <View style={ styles.textcontainer}>
     <Text style={[styles.text,{fontWeight:'bold'}]}>Dhanushya</Text>  
     <Text style={styles.text}>2 Listings</Text></View>
         </View>
        

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor:'white',
        width:'100%',
        height:'50%', 
        flexDirection:'row',
        marginTop:'20%',
        //justifyContent:'center',
        marginLeft:'5%',
        borderColor:'black'
        
               },

      image:{
        marginTop:20,
          width:70,
          height:70,
          borderRadius:50
           },


           text:{
           // marginTop:25,
            marginLeft:20
            
            },

            textcontainer:{
                marginTop:"10%",
            }

})

export default ListItem;