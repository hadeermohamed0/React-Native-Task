import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Drawer = createDrawerNavigator();

const AppNavigator2 = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff", 
        drawerStyle: {
          backgroundColor: "#000",  
        },
        drawerLabelStyle: {
          color: "#fff",    
        },
        drawerActiveBackgroundColor: "#1a1a1a", 
        drawerActiveTintColor: "#fff", 
        drawerInactiveTintColor: "#aaa",    
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigator2;
