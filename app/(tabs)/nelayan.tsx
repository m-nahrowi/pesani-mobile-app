import ICONS from '@/assets/Icons';
import orang from '@/assets/images/nelayan';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.container}>
      {/* <View style={{marginH: 8}}> */}
      <View style={styles.Row}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={orang.budi} style={styles.fotoNelayan} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 14 }}>Pak Budi Hartono</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={ICONS.rating} style={{ height: 19, width: 19, resizeMode: 'contain', marginRight: 3 }} />
              <Text>5.0</Text>
            </View>
          </View>
          <Image source={ICONS.lokasi} style={{ height: 20, width: 20, resizeMode: "contain", marginTop: 10 }} />
          <Text style={{ fontSize: 12 }}>Keretek</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text style={{ color: "grey", fontSize: 14, marginTop: 5 }}>Estimasi Ikan</Text>
              <Text>2 Ton</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8} // Mengatur opacity saat ditekan (opsional)
            // onPress={onPress}
            >
              <Text style={{ color: 'white' }}>Cek Tangkapan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10
  },
  fotoNelayan: {
    width: 100,
    height: 100,
  },
  Row: {
    flexDirection: 'row',
    // justifyContent: 'space-around'
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#008774',
    // paddingHorizontal: 20,
    // paddingVertical: 3,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 30,
    // marginRight: 3
  },

});
