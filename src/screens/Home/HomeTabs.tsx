import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstTab from 'HappGer/src/screens/Home/tabs/FirstTab';
const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Build"
        component={FirstTab}
        options={{
          tabBarLabel: 'Build',
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabs