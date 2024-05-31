import ICONS from '@/assets/Icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#008774',
            tabBarLabelStyle: {
                // display: 'none',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: 12, // Ubah ukuran font sesuai keinginan
                fontWeight: 'bold', // Membuat teks tebal
                // marginBottom: 5,  // Menambah jarak antara ikon dan teks
                
            }
        }}>
           <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ICONS.home}
                            style={{ width: 30, height: 28, }}
                        />),
                        // tabBarLabel: () => null,
                }}
            />
            <Tabs.Screen
                name="lelang"
                options={{
                    title: 'Lelang',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ICONS.lelang}
                            style={{ width: 30, height: 28, }}
                        />),
                }}
            />
            <Tabs.Screen
                name="nelayan"
                options={{
                    title: 'Nelayan',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ICONS.nelayan}
                            style={{ width: 30, height: 28, }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="pesanan"
                options={{
                    title: 'Pesanan',
                    tabBarIcon: ({ color }) => (
                        <Image
                            source={ICONS.pesanan}
                            style={{ width: 30, height: 28, }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
