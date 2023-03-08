import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../../screens/Home/Profile';
import SettingsScreen from '../../screens/Home/Settings';
import Home from '../../screens/Home/Home'
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Setting" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator