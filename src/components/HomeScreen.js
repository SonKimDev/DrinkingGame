import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Player from './Player';

const HomeScreen = () => {
  const [players, setPlayers] = useState([
    {
      index: 1,
    },
    {
      index: 2,
    },
  ]);

  const handleAddPlayer = () => {
    console.log('123');
    const index = players.length + 1;
    const newPlayer = {index: index};
    setPlayers([...players, newPlayer]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>DRINKING GAME</Text>
      <ScrollView>
        {players.map((player, index) => (
          <Player key={index} index={player.index} />
        ))}
        <TouchableOpacity
          style={styles.buttonAddPlayerContainer}
          onPress={() => handleAddPlayer()}>
          <Text style={styles.buttonAddPlayerContent}>+</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.startContainer}>
        <Text style={styles.startContent}>Bắt đầu !</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f41b4e',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    marginTop: '10%',
    fontSize: 30,
    fontStyle: 'italic',
    marginBottom: 50,
    fontWeight: '700',
  },
  buttonAddPlayerContainer: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderRadius: 25, // Đặt borderRadius thành nửa của chiều rộng
    width: 30,
    height: 30, // Đặt chiều cao là giống nhau với chiều rộng
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAddPlayerContent: {
    color: '#f41b4e',
    fontWeight: '700',
    fontSize: 20,
  },
  startContainer: {
    marginBottom: 30,
    backgroundColor: 'black',
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 8,
    transform: [{rotate: '-5deg'}],
    marginTop: 30,
  },
  startContent: {
    color: 'white',
    padding: 10,
    fontWeight: '700',
    fontSize: 20,
  },
});
