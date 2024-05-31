import ICONS from '@/assets/Icons';
import LELANG from '@/assets/images/lelang';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// import  from 'react-native';


export default function Tab() {
    return (
        <View>
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                <Text style={{fontSize: 20 ,fontWeight: 'bold', marginBottom: 10 }}>
                    SEDANG BERLANGSUNG
                </Text>
                <Image source={ICONS.fire} style={{ width: 25, height: 25, resizeMode: 'contain' }} />
            </View>
            <ScrollView horizontal style={{flexDirection: 'row'}}>
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={ICONS.time} style={{ width: 30, height: 30, resizeMode: 'contain', margin: 10 }} />
                        <Text style={{ fontSize: 18 }}>20 : 31</Text>
                    </View>
                    <Image source={LELANG.tongkol} style={{ width: 200, height: 150, resizeMode: 'contain' }} />
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
                        Ikan Tangkapan
                    </Text>
                    <Text style={{ marginBottom: 10, marginLeft: 10, color: "grey" }}>
                        Pak Budi Hartono
                    </Text>
                </View>
                {/*  */}
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={ICONS.time} style={{ width: 30, height: 30, resizeMode: 'contain', margin: 10 }} />
                        <Text style={{ fontSize: 18 }}>20 : 31</Text>
                    </View>
                    <Image source={LELANG.tongkol} style={{ width: 200, height: 150, resizeMode: 'contain' }} />
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
                        Ikan Tangkapan
                    </Text>
                    <Text style={{ marginBottom: 10, marginLeft: 10, color: "grey" }}>
                        Pak Budi Hartono
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={ICONS.time} style={{ width: 30, height: 30, resizeMode: 'contain', margin: 10 }} />
                        <Text style={{ fontSize: 18 }}>20 : 31</Text>
                    </View>
                    <Image source={LELANG.tongkol} style={{ width: 200, height: 150, resizeMode: 'contain' }} />
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
                        Ikan Tangkapan
                    </Text>
                    <Text style={{ marginBottom: 10, marginLeft: 10, color: "grey" }}>
                        Pak Budi Hartono
                    </Text>
                </View>
            </ScrollView>

            {/*  */}
            <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
                    AKAN DATANG
                </Text>
                <Image source={ICONS.time} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
            </View>
            <ScrollView horizontal style={{flexDirection: 'row'}}>
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={ICONS.time} style={{ width: 30, height: 30, resizeMode: 'contain', margin: 10 }} />
                        <Text style={{ fontSize: 18 }}>20 : 31</Text>
                    </View>
                    <Image source={LELANG.tongkol} style={{ width: 200, height: 150, resizeMode: 'contain' }} />
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
                        Ikan Tangkapan
                    </Text>
                    <Text style={{ marginBottom: 10, marginLeft: 10, color: "grey" }}>
                        Pak Budi Hartono
                    </Text>
                </View>
                {/*  */}
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={ICONS.time} style={{ width: 30, height: 30, resizeMode: 'contain', margin: 10 }} />
                        <Text style={{ fontSize: 18 }}>20 : 31</Text>
                    </View>
                    <Image source={LELANG.tongkol} style={{ width: 200, height: 150, resizeMode: 'contain' }} />
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
                        Ikan Tangkapan
                    </Text>
                    <Text style={{ marginBottom: 10, marginLeft: 10, color: "grey" }}>
                        Pak Budi Hartono
                    </Text>
                </View>
                {/*  */}
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={ICONS.time} style={{ width: 30, height: 30, resizeMode: 'contain', margin: 10 }} />
                        <Text style={{ fontSize: 18 }}>20 : 31</Text>
                    </View>
                    <Image source={LELANG.tongkol} style={{ width: 200, height: 150, resizeMode: 'contain' }} />
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>
                        Ikan Tangkapan
                    </Text>
                    <Text style={{ marginBottom: 10, marginLeft: 10, color: "grey" }}>
                        Pak Budi Hartono
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        marginVertical: 1,
        marginHorizontal: 8,
        padding: 1

    },
});
