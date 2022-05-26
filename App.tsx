import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,View,Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Components/Home';
import CreateAcc from './Components/CreateAccount'
import Complete from './Components/CompleteCreate'
import CheckAcc from './Components/CheckAccount'
import MyAcc from './Components/MyAccountStatus'
import Remit from './Components/Remit'
import MyTabs from './Components/Bottom_Tab';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
    </Tab.Navigator>
  )
}
function App() { 
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='계좌 생성' component={CreateAcc}/>
        <Stack.Screen name='계좌 생성 완료' component={Complete}/>
        <Stack.Screen name='계좌 조회' component={CheckAcc}/>
        <Stack.Screen name='잔고 현황' component={MyAcc}/>
        <Stack.Screen name='송금' component={Remit}/>
        <Stack.Screen name='Tabs' component={HomeTab}
          options={{headerShown: false}}/>
        {/* <Stack.Screen name="Tabs" component={MyTabs}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    )
  }


const styles = StyleSheet.create({

});


export default App;