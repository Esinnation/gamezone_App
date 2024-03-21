import 'react-native-gesture-handler';
import Home from './screens/Home';
import * as Font from 'expo-font'
import { useState } from 'react';
import AppLoading from 'expo-app-loading'
import HomeStack from './routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './routes/AboutStack';
import MyDrawer from './routes/MyDrawer';
import { SafeAreaView } from 'react-native';

const getFonts =()=> Font.loadAsync({
    'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'), 
    'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf',)
  })

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(true)
  if(fontLoaded){
    return (
        <NavigationContainer >
          <MyDrawer/>
        </NavigationContainer>
    );
  }else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontLoaded(true)}
        onError={console.warn}
      />
    )
  }
}

