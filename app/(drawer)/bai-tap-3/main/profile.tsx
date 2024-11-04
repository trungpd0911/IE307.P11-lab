import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../auth-provider';
import { Button } from '../../../../components/ui/button';
import { router } from 'expo-router';


const profile = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='font-bold text-2xl'>profile</Text>
      <Button
        size={'lg'}
        onPress={() => {
          logout();
          router.navigate('/(drawer)/bai-tap-3/login');
        }}
        className='bg-blue-500 mt-4'
      >
        <Text className='text-white'>Logout</Text>
      </Button>

    </View>
  )
}

export default profile