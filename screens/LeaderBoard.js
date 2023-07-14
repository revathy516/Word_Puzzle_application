import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Share, View, Button
} from "react-native"
import Leaderboard from 'react-native-leaderboard';
import {readScore} from '../assets/scoreStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LeaderBoard = (props) => {
  // Hardcoded data, since in reality it will be available in cloud and consumed by webservice call.
  const datas = 
     [
        {userName:"revathy", highScore: "10"},
        {userName: "Mark", highScore: "5"},
        {userName: "kenny", highScore: "5"},
        {userName: "Gowtham", highScore: "5"}

        //...
    ]
    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            'join Word Puzzle and win high score '
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        Alert.alert(error.message);
      }
    };

  return (
    <SafeAreaView style={styles.container}>
      <Leaderboard 
        data={datas} 
        sortBy='highScore' 
        labelBy='userName'/>
         <View style= {styles.categoryButton}>
         <Button  onPress={onShare} title="Share"  />
                        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  categoryButton:{
    marginVertical:10,
     marginHorizontal:20
  },
})
export default LeaderBoard;

