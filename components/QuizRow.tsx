import React from "react"
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Button,
} from "react-native"
import { useNavigation } from "@react-navigation/native";

const QuizRow = (props) => {
  const navigation = useNavigation();
const ReturnBlock = ({
  index,
  guess,
  word,
  guessed,
}: {
  index: number,
  guess: string,
  word: string,
  guessed: boolean,
}) => {
  
  const letter = guess[index]
  const wordLetter = word[index]
  const blockStyles: any[] = [styles.guessSquare]
  const textStyles: any[] = [styles.guessLetter]

  return (
    <View style={blockStyles}>
      <Text style={textStyles}>{letter}</Text>
    </View>
  )
}

const QuizRow = ({
  guess,
  word,
  guessed,
}: {
  guess: string,
  word: string,
  guessed: boolean,
}) => {
  return (
  <View style={styles.quizRow}> 
   <ReturnBlock index={0} guess={guess} word={word} guessed={guessed} />
  <ReturnBlock index={1} guess={guess} word={word} guessed={guessed} />
  <ReturnBlock index={2} guess={guess} word={word} guessed={guessed} />
  <ReturnBlock index={3} guess={guess} word={word} guessed={guessed} />
  <ReturnBlock index={4} guess={guess} word={word} guessed={guessed} /> 
    </View>
  )
}

const ScrambledRow = ({
  letters,
  onKeyPress,
}: {
  letters: string[],
  onKeyPress: (letter: string) => void,
}) => (
  <View style={styles.scrambledRow}>
    {letters.map(letter => (
      <TouchableOpacity onPress={() => onKeyPress(letter)} key={letter}>
        <View style={styles.key}>
          <Text style={styles.keyLetter}>{letter}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
)

const words: string = 
  w

const ScrambledLetterBox = ({ onKeyPress , words}: { onKeyPress: (letter: string) => void , words: string}) => {
  const scrambledWord= scramble(words)
  const row1 =scrambledWord.length > 9 ? scrambledWord.substring(0,8).split(""): scrambledWord.split("")
  const row2 =  scrambledWord.length > 9 ? scrambledWord.substring(8, scrambledWord.length).split(""): []
  const row3 = ["⌫"]

  return (
    <View style={styles.keyboard}>
      {(scrambledWord.length) > 9 ? (<View> 
        <ScrambledRow letters={row1} onKeyPress={onKeyPress} />
      <ScrambledRow letters={row2} onKeyPress={onKeyPress} />
      <ScrambledRow letters={row3} onKeyPress={onKeyPress} /> 
      </View>) :
      (<View> 
         <ScrambledRow letters={row1} onKeyPress={onKeyPress} />
      <ScrambledRow letters={row3} onKeyPress={onKeyPress} /> 
      </View>)
      }
      <View style={styles.scrambledRow}>
        <TouchableOpacity onPress={() => onKeyPress("ENTER")}>
          <View style={styles.key}>
            <Text style={styles.keyLetter}>ENTER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

interface IGuess {
  [key: number]: string;
}

const scramble = word => {
  var unique = {};
  var newWord = "";
  var wordLength = word.length;

  word = word.toLowerCase(); //Because why would we want to make it easy for them?

  while(wordLength != newWord.length) {

      var random = ~~(Math.random() * wordLength);

      if(

        unique[random]
        ||
        random == newWord.length && random != (wordLength - 1) //Don't put the character at the same index it was, nore get stuck in a infinite loop.

      ) continue; //This is like return but for while loops to start over.

      unique[random] = true;
      newWord += word[random];

  };
  return newWord;

};


const defaultGuess: IGuess = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
}

  const [activeWord, setActiveWord] = React.useState(words)
  const [guessIndex, setGuessIndex] = React.useState(0)
  const [guesses, setGuesses] = React.useState (defaultGuess)
  const [gameComplete, setGameComplete] = React.useState(false)
  const handleKeyPress = (letter: string) => {

    const guess: string = guesses[guessIndex]
    if (letter === "ENTER") {

      if (guess.length !== 5) {
        alert("Wrong Guess! Try Again")
        setGameComplete(false)
        return
      }

      if (guess === activeWord) {
        navigation.navigate('LeaderBoard')
        setGameComplete(true)
        return
      }

    }
    if(guessIndex ==1){
      const tempGuess = guesses[0].concat(guess)
      if(activeWord == tempGuess){
         navigation.navigate('LeaderBoard')
        setGameComplete(true)
        return
      }
      console.log("tempguess"+ String(tempGuess))
    }

    if (letter === "⌫") {
      setGuesses({ ...guesses, [guessIndex]: guess.slice(0, -1) })
      return
    }

    if (activeWord.length >= 5 && guess.length >= 5) {
      setGuessIndex(guessIndex+1)   
      setGuesses({ ...guesses, [guessIndex]: guess + letter }) 
    }

    setGuesses({ ...guesses, [guessIndex]: guess + letter })
  }

  React.useEffect(() => {
    if (!gameComplete) {
      setGuesses(defaultGuess)
      setGuessIndex(0)
    }

  }, [gameComplete])

  return (
    <SafeAreaView style={styles.container}>
      {activeWord.length > 5 ? (<View> 
        <QuizRow
          guess={guesses[0]}
          word={activeWord}
          guessed={guessIndex > 0}
        />
        <QuizRow
          guess={guesses[1]}
          word={activeWord}
          guessed={guessIndex > 1}
        />
        </View>) : (<View>
          <QuizRow
        guess={guesses[0]}
        word={activeWord}
        guessed={guessIndex > 0}
      /></View> )}     
      <View>
        <ScrambledLetterBox onKeyPress={handleKeyPress} words={words} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  quizRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  guessSquare: {
    borderColor: "#d3d6da",
    borderWidth: 2, 
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  guessLetter: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#878a8c",
  },
  guessedLetter: {
    color: "#fff",
  },
  guessCorrect: {
    backgroundColor: "#6aaa64",
    borderColor: "#6aaa64",
  },
  guessInWord: {
    backgroundColor: "#c9b458",
    borderColor: "#c9b458",
  },
  guessNotInWord: {
    backgroundColor: "#787c7e",
    borderColor: "#787c7e",
  },

  container: {
    justifyContent: "space-between",
    flex: 1,
  },

  // keyboard
  keyboard: { flexDirection: "column" },
  scrambledRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  key: {
    backgroundColor: "#d3d6da",
    padding: 10,
    margin: 3,
    borderRadius: 5,
  },
  keyLetter: {
    fontWeight: "500",
    fontSize: 15,
  },

  // Game complete
  gameCompleteWrapper: {
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },
})
export default QuizRow;
