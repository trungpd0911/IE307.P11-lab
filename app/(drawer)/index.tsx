import { Stack } from 'expo-router';
import { Text } from '../../components/ui/text';
import { View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className='flex-1'>
        <Text className='font-bold'>Home</Text>
      </View>
    </>
  );
}
