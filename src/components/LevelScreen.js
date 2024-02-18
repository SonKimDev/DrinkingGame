import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';

const LevelScreen = ({route}) => {
  const {players} = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.returnButtonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Icon
          name={'arrow-back-circle-outline'}
          color={colors.white}
          size={32}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Chế độ</Text>
      <View style={styles.levelContainer}>
        <TouchableOpacity style={styles.boxLevel}>
          <Text style={styles.boxTitle}>Nhẹ Nhàng</Text>
          <Text style={styles.boxDescription}>
            Tìm hiểu người yêu của bạn, những sự thật và thử thách nhẹ nhàng để
            bắt đầu.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxLevel}>
          <Text style={styles.boxTitle}>Mạnh Bạo</Text>
          <Text style={styles.boxDescription}>
            Vượt qua giới hạn của bản thân, các bạn sẽ có những phút giây đáng
            nhớ bên nhau.
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LevelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  returnButtonContainer: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  returnButtonContent: {
    color: colors.white,
  },
  title: {
    alignSelf: 'center',
    color: colors.white,
    fontWeight: '700',
    fontSize: 40,
    marginBottom: 24,
  },
  levelContainer: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 16,
  },
  boxLevel: {
    borderBottomWidth: 1,
    padding: 8,
    borderColor: colors.background,
  },
  boxTitle: {
    color: colors.background,
    fontSize: 20,
    fontWeight: '700',
  },
  boxDescription: {
    color: colors.background,
  },
});
