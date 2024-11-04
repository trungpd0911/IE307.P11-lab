import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className='flex-1 justify-center items-center bg-gray-100'>
        <Text className='text-lg font-bold text-red-500'>Not found</Text>
        <Link href="/" className='mt-4 text-blue-500'>
          Go back to Home
        </Link>
      </View>
    </>
  );
}
