import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main}><Text style={styles.word}>あ</Text></View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.previous}>Previous</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  main: {
    flex:0.5,
    borderWidth: 1,
    borderRadius:20,
    backgroundColor:'#FF6969',
    width: 350,
  },
  word: {
    textAlign:'center',
    fontSize: 180,
    paddingTop:100,
    color:'white'
  },
  button: {
    flex:0.04,
    marginTop: 20,
    borderWidth:1,
    width: 110,
    borderRadius: 4,
    marginRight:240,
  },
  previous: {
    fontSize:26,
    color: '#FF6969'
  }
});
