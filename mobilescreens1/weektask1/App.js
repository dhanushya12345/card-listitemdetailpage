import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, ProgressViewIOSComponent} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import LoginButton from './components/LoginButton';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import Card from './components/Card';
import ListDetailScreen from './screens/ListDetailScreen';
export default function App() {

  console.log(useDimensions())
  console.log(useDeviceOrientation());
const {landscape} = useDeviceOrientation()


  return (
    <SafeAreaView style={styles.container}>
      
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <LoginButton></LoginButton> */}
{/* <Card title='Red jacket for sales, order now' subtitle='$70'></Card> */}
<ListDetailScreen></ListDetailScreen>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:StatusBar.currentHeight+3,
 
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:'wrap',
    alignContent:'stretch',
   
  },
});
