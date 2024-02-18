import {
  Alert,
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
import colors from '../assets/colors';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [players, setPlayers] = useState([
    {
      index: 1,
      name: '',
      gender: 'Male',
    },
    {
      index: 2,
      name: '',
      gender: 'Male',
    },
  ]);

  const handleAddPlayer = () => {
    const index = players.length + 1;
    const newPlayer = {index: index};
    setPlayers([...players, newPlayer]);
  };

  const handlePlayerDataChange = playerData => {
    setPlayers(prevPlayers => {
      const updatedPlayers = prevPlayers.map(player => {
        if (player.index === playerData.index) {
          return playerData;
        }
        return player;
      });
      return updatedPlayers;
    });
  };

  const handleStart = () => {
    navigation.navigate('Level', {players: players});
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.optionsContainer}>
        <Icon name={'settings-sharp'} size={24} color={colors.white} />
      </TouchableOpacity>
      <Text style={styles.title}>DRINKING GAME</Text>
      <TouchableOpacity
        style={styles.buttonAddPlayerContainer}
        onPress={() => handleAddPlayer()}>
        <Icon name={'person-add-outline'} size={16} color={colors.background} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        {players.map((player, index) => (
          <Player
            key={index}
            index={player.index}
            setPlayers={handlePlayerDataChange}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.startContainer}
        onPress={() => handleStart()}>
        <Text style={styles.startContent}>Bắt đầu !</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
  },
  optionsContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  optionsContent: {
    color: colors.white,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    marginTop: '5%',
    fontSize: 30,
    fontStyle: 'italic',
    marginBottom: 8,
    fontWeight: '700',
  },
  buttonAddPlayerContainer: {
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
    borderRadius: 25,
    marginBottom: 8,
    width: 30,
    height: 30,
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
    backgroundColor: colors.black,
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 8,
    transform: [{rotate: '-5deg'}],
    marginTop: 30,
  },
  startContent: {
    color: colors.white,
    padding: 10,
    fontWeight: '700',
    fontSize: 20,
  },
});
