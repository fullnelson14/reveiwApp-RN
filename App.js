import React from "react";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import SplashScreen from "react-native-splash-screen";
import Icon from "react-native-vector-icons/FontAwesome";

import Homescreen from "screens/Homescreen";
import Infoscreen from "screens/Infoscreen";
import AboutTab from "screens/About";

import AddReviewModal from "screens/modals/AddReview";

const HomeStack = createStackNavigator(
  {
    Home: { screen: Homescreen },
    Info: { screen: Infoscreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#777",
        color: "#fff"
      },
      headerTintColor: "blue",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    About: AboutTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const route = navigation.state.routeName;
        const name = {
          Home: "list",
          About: "info-circle"
        }[route];
        return <Icon name={name} color={tintColor} size={22} />;
      }
    }),
    tabBarOptions: {
      activeBackgroundColor: "#545fa3",
      activeTintColor: "#5030d0"
    }
  }
);

const ModalContainerNav = createStackNavigator(
  {
    Tabs: Tabs,
    AddReview: AddReviewModal
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const ModalNav = createAppContainer(ModalContainerNav);

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <ModalNav />;
  }
}
