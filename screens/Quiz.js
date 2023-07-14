import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import questions from '../assets/questions.json';
import QuesAnsPair from '../components/QuesAnsPair';
import { writeScore } from '../assets/scoreStorage';


const Quiz = (props) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [showNext, setShowNext] = useState(false);
    const [score, setScore] = useState(0);

    const handleQuizTraversal = () => {
        if (questionIndex === questions['questions'].length - 1) {
            writeScore(`${score}`);
            props.navigation.navigate('LeaderBoard', {score: score});
            return
            //${score} out of ${questions['questions'].length}`
        }
        setQuestionIndex((questionIndex) => questionIndex + 1);
        setShowNext(false);
    }

    const is_next = () => {
        setShowNext(true);
    }

    const get_Score = (score) => {
        setScore(score);
    }


    return (
        <View style={styles.quizContainer}>
            <QuesAnsPair
                question={questions['questions'][questionIndex]['questionText']}
                index={questionIndex}
                answers={questions['questions'][questionIndex]['answers']}
                is_next={is_next}
                getScore={get_Score}
                length={questions['questions'].length}    
            />
                        <Button title={questionIndex === questions['questions'].length - 1 ? 'end ' : 'next'} onPress={handleQuizTraversal} />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "space-between",
    },
    backButton: {
        marginRight: 10,
    },
    quizContainer: {
        margin: 20,
        padding: 15,
        minHeight:90
    },

});

export default Quiz;