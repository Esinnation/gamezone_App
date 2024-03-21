import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import {SafeAreaView} from 'react-native'

const Stack = createStackNavigator()
const HomeStack=()=>{
  return(
    <Stack.Navigator >
      <Stack.Screen 
        name='GameZone'  
        component={Home}
        options={{
          headerShown:false
        }} 
      />
      <Stack.Screen 
        name='Review Details'  
        component={ReviewDetails}
        
        
      />
    </Stack.Navigator>
  )
}
export default HomeStack