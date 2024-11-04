import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
      options={{
        headerTitle: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="bai-tap-1"
      options={{
        headerTitle: 'Social Media Feed',
        drawerLabel: 'bai-tap-1',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="bai-tap-2"
      options={{
        headerTitle: 'Settings and Feedback',
        drawerLabel: 'bai-tap-2',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#000000',
        drawerLabelStyle: {
          color: '#000000',
        },
      }}
    />
    <Drawer.Screen
      name="bai-tap-3"
      options={{
        headerTitle: 'React Navigation',
        drawerLabel: 'bai-tap-3',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#000000',
        drawerLabelStyle: {
          color: '#000000',
        },
      }}
    />
  </Drawer>
);

export default DrawerLayout;
