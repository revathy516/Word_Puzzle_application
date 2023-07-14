import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import  QuizRow  from '../components/QuizRow';

const QuesAnsPair = (props) => {
   
    const [score, setScore] = useState({});
    useEffect(() => {
            var arr = Object.values(score)
            let temp = 0;
            for (let i = 0; i < arr.length; i++) {
                temp = temp + arr[i]
            }
            final_score = temp
            props.getScore(final_score);
    }, [score])

    var final_score;
    const handleNext = async () => {
        final_score = score
    }

    return (
        <>
            <View style={styles.questionContainer}>
                <Text style={styles.questionIndex}>Question {props.index + 1}</Text>
                <Text style={styles.questionText}>
                    {props.question}
                </Text>
            </View>
            <View style={styles.answersContainer}>
                <QuizRow  score={
                    props.score
                }></QuizRow>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    questionContainer: {
        margin: 10,
        padding:5,
        backgroundColor: Colors.accent,
        borderRadius: 2,
        borderColor: Colors.primary,
        borderWidth: 2,
        minHeight: '20%'
    },
    questionIndex: {
        textAlign: 'center',
        fontSize: 22,
        marginBottom: 15,
        fontWeight: 'bold',
        color: Colors.primary
    },
    questionText: {
        fontSize: 20,
        textAlign: 'center',

    },
    answersContainer: {
        marginBottom: 10,
        alignItems: 'center',
        minHeight: '50%'
    },
})

export default QuesAnsPair;