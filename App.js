import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ManageExpenses from './src/screens/ManageExpenses';
import RecentExpenses from './src/screens/RecentExpenses';
import AllExpenses from './src/screens/AllExpenses';

import { GlobalStyles } from './src/constants/styles';

const colors = GlobalStyles.colors;
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: colors.primary500 },
                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: colors.primary500,
                },
                tabBarActiveTintColor: colors.accent500,
            }}
        >
            <BottomTabs.Screen
                name='RecentExpenses'
                component={RecentExpenses}
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='hourglass'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <BottomTabs.Screen
                name='AllExpenses'
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='calendar'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style='auto' />
            <NavigationContainer>
                <Stack.Navigator initialRouteName='ExpensesOverview'>
                    <Stack.Screen
                        name='ExpensesOverview'
                        component={ExpensesOverview}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='ManageExpense'
                        component={ManageExpenses}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
