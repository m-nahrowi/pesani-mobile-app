import IMAGE from '@/assets/images';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

export default function Tab() {

  const [search, setSearch] = useState("");

  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../../assets/images/pesani-8.png')}
          style={{ width: 70, height: 70, resizeMode: 'contain' }} />
        <View style={styles.pembagi}>
          <Text style={{ marginRight: 5 }}>icon</Text>
          <Text>Icon 2</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setSearch}
        value={search}
        placeholder="Mau cari ikan apa?"
      />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.banner}>
        <Image source={IMAGE.BANNER_1} style={styles.IMAGE} />
        <Image source={IMAGE.BANNER_2} style={styles.IMAGE} />
        <Image source={IMAGE.BANNER_3} style={styles.IMAGE} />
      </ScrollView>
      <View style={styles.rekomendasi}>
        <Text style={{fontWeight: 'bold', color: 'green'}}>Rekomendasi</Text>
        <Text>Lihat semua</Text>
      </View>
      <ScrollView>
        <View>

        </View>
        <View>
          
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',

  },
  pembagi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  input: {
    padding: 4,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'green'

  },
  banner: {
    flexDirection: 'column',
    // padding: 1,
    marginHorizontal: 10,
    // flex: 1

  },
  rekomendasi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 1,
    marginHorizontal: 15,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  IMAGE: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginHorizontal: 5,
    marginTop: 0,
    marginBottom: 0,

  },
  pembagiIkan:{
    
  },
  containerIkan:{

  }
});
