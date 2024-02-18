import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../assets/colors';

const Player = ({index, setPlayers}) => {
  const [playerName, setPlayerName] = useState('');
  const [currentGender, setCurrentGender] = useState('Male');

  useEffect(() => {
    updatePlayer();
  }, [playerName, currentGender]);

  const handleSetGender = gender => {
    setCurrentGender(gender);
  };

  const changeName = name => {
    setPlayerName(name);
  };

  const updatePlayer = () => {
    setPlayers({
      index: index,
      name: playerName,
      gender: currentGender,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={`Người chơi ${index}`}
        style={styles.input}
        placeholderTextColor={'#d3d3d3'}
        onChangeText={text => changeName(text)}
      />
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            currentGender === 'Male' ? styles.genderActiveColor : null,
          ]}
          onPress={() => handleSetGender('Male')}>
          <Text style={styles.genderText}>👨🏻‍💼</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            currentGender === 'Female' ? styles.genderActiveColor : null,
          ]}
          onPress={() => handleSetGender('Female')}>
          <Text style={styles.genderText}>👩🏻‍💼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    flexDirection: 'row',
    marginBottom: 8,
    paddingBottom: 5,
    height: 50,
  },
  input: {
    width: '70%',
    color: 'white',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.white,
    overflow: 'hidden',
  },
  genderButton: {
    paddingHorizontal: 10,
    height: '100%',
    justifyContent: 'center',
  },
  genderText: {
    color: colors.black,
    fontSize: 20,
  },
  genderActiveColor: {
    backgroundColor: colors.white,
  },
});
