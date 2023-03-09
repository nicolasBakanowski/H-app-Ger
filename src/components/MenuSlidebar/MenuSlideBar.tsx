import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../../screens/Profile/Profile';
import SettingsScreen from '../../screens/Settings/Settings';
import Home from '../../screens/Home/Home'
import { RootStackParamList } from '../../screens/Home/interface'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState } from '../../store/index';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type Props = {
  navigation: LoginScreenNavigationProp;
};
const DrawerNavigator = ({ navigation }: Props) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <>
      {isAuth ? (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
      ) : (
        navigation.navigate('Login')
      )}
    </>
  );
};
export default DrawerNavigator