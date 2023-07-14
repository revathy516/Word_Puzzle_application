import React from "react"
import {
  StyleSheet,
  SafeAreaView,
  Share, View, Button
} from "react-native"
import Leaderboard from 'react-native-leaderboard';

const LeaderBoard = (props) => {
  const datas = 
     [
        {userName: props.userName, highScore: props.score},
        //...
    ]
    const sampleData= [{}]
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
        data={data} 
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

