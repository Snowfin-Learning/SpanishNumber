
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const App = () => {

  const playSound = (sound) => {
    const varSound = new Sound(sound, Sound.MAIN_BUNDLE, (err) =>{
      if(err){
        console.log('Not Able to play Sound')
      }
    });

    setTimeout(() => {
      varSound.play()
    }, 99);

    varSound.release();

  }

  return (
    <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <View style={styles.gridContainer}>
            {
              soundList.map( (sound) => (
                <TouchableOpacity
                    key={sound}
                    onPress={() => {playSound(sound)}}
                    style={styles.box}
                  >
                    <Text style={styles.text}>
                        {sound}
                    </Text>
                </TouchableOpacity>
              ))
            }
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242B2E'
    },
    logo: {
      alignSelf: 'center',
      marginTop: 15
    },
    gridContainer: {
      flex: 1,
      flexDirection: 'row',
      margin: 15,
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      marginTop: 25
    },
    box: {
      height: 110,
      alignItems: 'center',
      justifyContent: 'center',
      width: '46%',
      marginVertical: 6,
      backgroundColor: '#0f4c75',
      borderRadius: 10,
      shadowColor: '#393e46',
      elevation: 10
    },
    text: {
      fontSize: 30,
      color: '#CAD5E2',
    }
});

export default App;
