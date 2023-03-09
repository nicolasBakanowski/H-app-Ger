import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShowProducts from 'HappGer/src/screens/Home/tabs/ShowProducts';
const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Take a product"
        component={ShowProducts}
        options={{
          tabBarLabel: 'Build',
        }}
      />
      <Tab.Screen
        name="In Badget"
        component={ShowProducts}
        options={{
          tabBarLabel: 'In Badget',
        }}
      />
      <Tab.Screen
        name="In "
        component={ShowProducts}
        options={{
          tabBarLabel: 'In ',
        }}
      />
      <Tab.Screen
        name="In AAS"
        component={ShowProducts}
        options={{
          tabBarLabel: 'In SASASA',
        }}
      />
      
    </Tab.Navigator>
  );
};
export default HomeTabs