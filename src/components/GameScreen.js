import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';
import colors from '../assets/colors';

const GameScreen = ({route}) => {
  const {players, level} = route.params;
  const navigation = useNavigation();

  const [isChoose, setIsChoose] = useState(false);
  console.log(players);

  const handleChooseOption = option => {
    setIsChoose(!isChoose);
  };

  return (
    <>
      {isChoose ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon
                name={'arrow-back-circle-outline'}
                color={colors.white}
                size={32}
              />
            </TouchableOpacity>
            <Text style={styles.title}>{level}</Text>
            <View />
          </View>
          <View style={styles.body}>
            <Text style={styles.namePlayer} />
            <Text style={styles.description} />
            <TouchableOpacity style={styles.handleNextContentContainer}>
              <Text style={styles.handleNextContentContent}>Tiếp</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon
                name={'arrow-back-circle-outline'}
                color={colors.white}
                size={32}
              />
            </TouchableOpacity>
            <Text style={styles.title}>{level}</Text>
            <View />
          </View>
          <View style={styles.body}>
            <Text style={styles.namePlayer}>Tên</Text>
            <TouchableOpacity onPress={() => handleChooseOption('Sự Thật')}>
              <Text style={styles.buttonChooseOptionContent}>Sự Thật</Text>
            </TouchableOpacity>
            <Text style={styles.content}>━━━━━━━━━━ H A Y ━━━━━━━━━━</Text>
            <TouchableOpacity onPress={() => handleChooseOption('Thử Thách')}>
              <Text style={styles.buttonChooseOptionContent}>Thử Thách</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 8,
    paddingBottom: 48,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  namePlayer: {
    marginBottom: 24,
    backgroundColor: colors.black,
    color: colors.white,
    padding: 10,
    fontWeight: '700',
    fontSize: 16,
    transform: [{rotate: '-5deg'}],
    borderRadius: 10,
  },
  buttonChooseOptionContent: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 5,
  },
  content: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
    paddingHorizontal: 70,
    lineHeight: 24,
  },
  handleNextContentContainer: {
    position: 'absolute',
    bottom: 0,
  },
  handleNextContentContent: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
