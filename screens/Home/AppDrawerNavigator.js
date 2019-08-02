//https://reactnavigation.org/en/
import { createDrawerNavigator } from "react-navigation";

import DashboardTabNavigator from "./Dashboard/DashboardTabNavigator";
import InfromationTabNavigator from "./Information/InfromationTabNavigator";

// TODO: Custom Drawer in this Navigator

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        drawerLabel: "Dashboard"
      };
    }
  },
  Information: {
    screen: InfromationTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        drawerLabel: "Information"
      };
    }
  }
});

export default AppDrawerNavigator;
