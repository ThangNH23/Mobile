import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [letterData, setLetterData] = useState([
    { id: 1, character: 'あ', equivalent: 'A' },
    { id: 2, character: 'Bê', equivalent: 'B' },
    { id: 3, character: 'Tâm', equivalent: 'ta' },
  ]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [display, setDisplay] = useState(true);

  const changeLetter = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };

  const changeNext = () => {
    setCurrentCharacterIndex((prevIndex) => (prevIndex + 1) % letterData.length);
  };

  const changePrevious = () => {
    const dataLength = letterData.length;
    const prevIndex = (currentCharacterIndex - 1 + dataLength) % dataLength;

    if (currentCharacterIndex > 0) {
      setCurrentCharacterIndex(prevIndex);
    }
  };

  const removeCharacterFromDeck = () => {
    // Lấy id của đối tượng hiện tại
    const currentCharacterId = letterData[currentCharacterIndex].id;
    
    // Sử dụng filter để tạo một mảng mới không bao gồm đối tượng có id trùng với đối tượng hiện tại
    const updatedLetterData = letterData.filter((item) => item.id !== currentCharacterId);
    
    // Cập nhật mảng letterData
    setLetterData(updatedLetterData);
    
    // Nếu đối tượng hiện tại là đối tượng cuối cùng, cập nhật chỉ số để tránh lỗi
    if (currentCharacterIndex === letterData.length - 1) {
      setCurrentCharacterIndex(currentCharacterIndex - 1);
    }
  };

  const currentLetter = display ? letterData[currentCharacterIndex].character : letterData[currentCharacterIndex].equivalent;

  return (
    <View style={styles.container}>
      <View style={styles.main} onTouchEnd={changeLetter}>
        <Text style={styles.word}>{currentLetter}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button} onTouchEnd={changePrevious}>
          <Text style={styles.previous}>Previous</Text>
        </View>
        <View style={styles.space}></View>
        <View style={styles.button} onTouchEnd={changeNext}>
          <Text style={styles.previously}>Next</Text>
        </View>
      </View>
      <View style={styles.buttonContent}>
        <TouchableOpacity style={styles.btn} onPress={removeCharacterFromDeck}>
          <Text style={styles.remove}>Remove From Deck</Text>
        </TouchableOpacity>
        {/* <View style={styles.spaces}></View> */}
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.reset}>Reset Deck</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f1f2f6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  main: {
    flex: 0.7,
    borderWidth: 1,
    borderColor:'#FF6969',
    borderRadius: 20,
    backgroundColor: '#FF6969',
    width: 350,
  },
  word: {
    textAlign: 'center',
    fontSize: 180,
    paddingTop: 100,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row', 
    marginTop: 20,
  },
  button: {
    flex: 1, 
    borderWidth: 1,
    borderColor:'#FF6969',
    borderRadius: 6,
    width:40,
    height:40,
    marginHorizontal: 22,
  },
  previous: {
    fontSize: 26,
    marginTop:3,
    textAlign:'center',
    color: '#FF6969',
  },
  space: {
    width: 60,
  },
  previously: {
    marginTop:3,
    fontSize: 26,
    textAlign: 'center', 
    color: '#FF6969',
  },
  buttonContent: {
    marginTop: 20
  },
  btn: {
    borderWidth: 1,
    marginTop: 20,
    width: 350,
    height: 65,
    borderRadius: 5,
    backgroundColor:'#ffffff',
    borderColor: '#fff'
  },
  remove: {
    fontSize: 30,
    marginTop: 3,
    textAlign: 'center',
    color: '#FF6969',
  },
  reset: {
    fontSize: 30,
    marginTop: 3,
    textAlign: 'center',
    color: '#FF6969',
  }
});
