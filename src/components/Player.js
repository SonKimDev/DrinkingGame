import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Player = props => {
  const [currentGender, setCurrentGender] = useState('');

  const handleSetGender = gender => {
    setCurrentGender(gender);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={`Người chơi ${props.index}`}
        style={styles.input}
        placeholderTextColor={'#d3d3d3'}
      />
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            currentGender === 'Male' ? styles.genderActiveColor : null,
          ]}
          onPress={() => handleSetGender('Male')}>
          <Text style={styles.genderText}>Nam</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            currentGender === 'Female' ? styles.genderActiveColor : null,
          ]}
          onPress={() => handleSetGender('Female')}>
          <Text style={styles.genderText}>Nữ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
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
    backgroundColor: '#f41b4e',
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
  },
  genderButton: {
    paddingHorizontal: 10,
    height: '100%',
    justifyContent: 'center',
  },
  genderText: {},
  genderActiveColor: {
    backgroundColor: 'white',
  },
});
