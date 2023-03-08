import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/Home/Home';
import ProfileScreen from '../../screens/Home/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator