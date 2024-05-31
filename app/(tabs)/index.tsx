import IMAGE from '@/assets/images';
import { useState } from 'react';
import ICONS from '@/assets/Icons';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput, ScrollView, Button } from 'react-native';

export default function Tab() {

  const [search, setSearch] = useState("");
  const onPress = () => {
    // Aksi yang akan dilakukan saat tombol ditekan
    console.log('Tombol ditekan!');
  };
  return (
    <View style={{backgroundColor: "white", marginBottom: 2}}>
      {/* <LinearGradient
         colors={['#00FF00', '#FFFFFF']} // Warna hijau ke putih
         style={styles.background}
      > */}
        <View style={styles.container}>
          <Image source={require('../../assets/images/pesani-8.png')}
            style={{ width: 70, height: 70, resizeMode: 'contain' }} />
          <View style={styles.pembagi}>
            <Image source={ICONS.keranjang}
              style={{ width: 30, height: 70, resizeMode: 'contain', marginRight: 20 }} />
            <Image source={ICONS.notif}
              style={{ width: 30, height: 70, resizeMode: 'contain' }} />
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          placeholder="Mau cari ikan apa?"
          autoFocus={true}
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
          <Text style={{ fontWeight: 'bold', color: '#008774' }}>Rekomendasi</Text>
          <Text style={{ color: '#008774' }}>Lihat semua</Text>
        </View>
        <ScrollView>
          <View style={styles.pembagiIkan}>
            <View style={styles.containerIkan}>
              <Image source={IMAGE.BANNER_1} style={styles.IMAGE} />
              <Text style={{
                fontSize: 12,
                marginHorizontal: 10
              }}>
                Ikan Kakap Merah
              </Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginVertical: 5,
                alignItems: 'center'

              }}>
                <Text style={{ fontSize: 10 }}>
                  Pak Budi
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={ICONS.rating} style={{ height: 13, width: 13, resizeMode: 'contain', marginRight: 3 }} />
                  <Text style={{ fontSize: 10 }}>5.0</Text>
                </View>

              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                alignItems: 'center',
                marginVertical: 5
              }}>
                <Text style={{ fontWeight: 'bold' }}>
                  Rp. 20.000
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8} // Mengatur opacity saat ditekan (opsional)
                  onPress={onPress}
                >
                  <Text style={{ color: 'white' }}>Beli</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <View>
              <Image source={IMAGE.BANNER_1} style={styles.IMAGE} />
            </View> */}
            <View style={[styles.containerIkan,]}>
              <Image source={IMAGE.BANNER_1} style={styles.IMAGE} />
              <Text style={{
                fontSize: 12,
                marginHorizontal: 10
              }}>
                Ikan Kakap Merah
              </Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginVertical: 5,
                alignItems: 'center'

              }}>
                <Text style={{ fontSize: 10 }}>
                  Pak Budi
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={ICONS.rating} style={{ height: 13, width: 13, resizeMode: 'contain', marginRight: 3 }} />
                  <Text style={{ fontSize: 10 }}>5.0</Text>
                </View>

              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                alignItems: 'center',
                marginVertical: 5
              }}>
                <Text style={{ fontWeight: 'bold' }}>
                  Rp. 20.000
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8} // Mengatur opacity saat ditekan (opsional)
                  onPress={onPress}
                >
                  <Text style={{ color: 'white' }}>Beli</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      {/* </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
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
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#008774'

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
    // borderWidth:2, borderColor: 'black'

  },
  pembagiIkan: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  containerIkan: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#008774',
    // borderColor: 'white',
    marginHorizontal: 8
  },
  button: {
    backgroundColor: '#008774',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 7,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },


});
