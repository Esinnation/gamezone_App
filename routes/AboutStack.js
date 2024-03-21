import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';


const Stack = createStackNavigator()
const AboutStack=()=>{
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#eee',
      },
      headerTintColor:'#444'
    }} >
      <Stack.Screen 
        name='About GameZone'  
        component={About} 
      />

    </Stack.Navigator>
  )
}
export default AboutStack