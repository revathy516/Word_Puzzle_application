import React from 'react';
import Colors from '../constants/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserFormScreen from '../screens/UserFormScreen';
import Quiz from '../screens/Quiz';
import LeaderBoard from '../screens/LeaderBoard';

const Stack = createStackNavigator();

const QuizNavigator = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primary
                    },
                    headerTintColor: 'white',
                }}>
                    <Stack.Screen
                        name="Home"
                        component={UserFormScreen}
                        options={{
                            title: "Words Puzzle",
                        }}
                    />
                    <Stack.Screen
                        name="Quiz"
                        component={Quiz}
                        options={{
                            title: "Quiz",
                        }}
                    />
                     <Stack.Screen
                        name="LeaderBoard"
                        component={LeaderBoard}
                        options={{
                            title: "LeaderBoard",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default QuizNavigator;

