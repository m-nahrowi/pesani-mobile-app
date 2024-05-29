import { View, Text, StyleSheet, Image } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/pesani-8.png')}
        style={{ width: 70, height: 70, resizeMode: 'contain' }} />
      <View style={styles.pembagi}>
        <Text style={{marginRight: 5}}>icon</Text>
        <Text>Icon 2</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',

  },
  pembagi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5
  }
});
