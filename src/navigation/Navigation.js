import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Setting from '../screen/Setting';
import Heart from '../screen/Heart';
import Profile from '../screen/Profile';
import HomeIcon from 'react-native-vector-icons/dist/MaterialIcons';
import HeartIcon from 'react-native-vector-icons/dist/Entypo';
import ProfileIcon from 'react-native-vector-icons/dist/FontAwesome';
import AddIcon from 'react-native-vector-icons/dist/Ionicons';










const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            
                screenOptions={({ route }) => ({
                    tabBarShowLabel:false,
                    headerShown:false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                            return <HomeIcon name="house" size={size} color={color} />;

                        } else if (route.name === 'Heart') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            return <HeartIcon name="heart" size={size} color={color} />;

                        }
                        else if (route.name === 'Setting') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            return <AddIcon name="add-circle" size={size} color={color} />;

                        }

                        else if (route.name === 'Profile') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                            return <ProfileIcon name="user" size={size} color={color} />;

                        }


                        // You can return any component that you like here!
                    },
                    tabBarActiveTintColor: '#23527C',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Heart" component={Heart} />
                <Tab.Screen name="Setting" component={Setting} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}