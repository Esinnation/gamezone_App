import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import AboutStack from './AboutStack';
import HomeStack from './HomeStack';
import About from '../screens/About';
import Header from '../shared/Header';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={HomeStack} options={{header:({navigation})=><Header navigation={navigation} title='Moviezz'/>}} />
      <Drawer.Screen name="About" component={About}  options={{header:({navigation})=><Header navigation={navigation} title='About Moviezz'/>}}/>
    </Drawer.Navigator >
  );
}
export default MyDrawer