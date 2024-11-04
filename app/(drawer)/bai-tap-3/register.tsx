import { Alert, Image, KeyboardAvoidingView, Modal, Platform, Pressable, TextInput, View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { Link, router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth-provider";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { Button } from "~/components/ui/button";

const Register = () => {
  // check auth status
  const { currentUser, register } = useContext(AuthContext);
  useEffect(() => {
    if (currentUser) {
      router.navigate('/(drawer)/bai-tap-3/');
    }
  });

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setModalText("password don't match");
      setModalVisible(true);
      return;
    }
    if (!register(email, password, username)) {
      setModalText('Email already exists');
      setModalVisible(true);
      return;
    } else {
      setModalText('Register successfully');
      setModalVisible(true);
      router.navigate('/(drawer)/bai-tap-3/login');
    }

  }

  return (
    <>
      <ScrollView className="flex-1 bg-slate-100 px-12">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className='flex-1'
        >
          {/* header */}
          <View className="mt-20 justify-center items-center">
            <Image
              source={{
                uri: 'https://www.scorchsoft.com/public/capabilities/head/react-native-logo-square.webp'
              }}
              className='w-32 h-32 rounded-full object-cover'
            />
            <Text className='font-bold text-3xl mt-3'>Create New Account</Text>
          </View>
          <View className="mt-6">
            {/* username */}
            <View className="border-2 border-slate-400 flex-row rounded-lg h-16 pr-4 my-2">
              <View className="justify-center items-center px-4 min-w-16">
                <FontAwesome name="user-o" size={28} color="black" />
              </View>
              <TextInput
                value={username}
                onChangeText={(text) => setUsername(text)}
                placeholder='Enter your username'
                className='flex-1 text-xl'
              >
              </TextInput>
            </View>
            {/* email */}
            <View className="border-2 border-slate-400 flex-row rounded-lg h-16 pr-4 my-2">
              <View className="justify-center items-center px-4 min-w-16">
                <Fontisto name="email" size={28} color="black" />
              </View>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder='Enter your email'
                className='flex-1 text-xl'
              >
              </TextInput>
            </View>
            {/* password */}
            <View className="border-2 border-slate-400 flex-row rounded-lg h-16 pr-4 my-2">
              <View className="justify-center items-center px-4 min-w-16">
                <Fontisto name="locked" size={28} color="black" />
              </View>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder='Enter your password'
                className='flex-1 text-xl'
                secureTextEntry={true}
              >
              </TextInput>
            </View>
            {/* confirm password */}
            <View className="border-2 border-slate-400 flex-row rounded-lg h-16 pr-4 my-2">
              <View className="justify-center items-center px-4 min-w-16">
                <Fontisto name="locked" size={28} color="black" />
              </View>
              <TextInput
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
                placeholder='Confirm your password'
                className='flex-1 text-xl'
                secureTextEntry={true}
              >
              </TextInput>
            </View>
            {/* button */}
            <Button
              className="mt-8 bg-orange-500"
              size={'lg'}
              onPress={handleRegister}
            >
              <Text className="font-bold">CREATE</Text>
            </Button>
          </View>
          <View className="flex-row mt-6 justify-center items-center">
            <Text className="text-xl">Already have an account?</Text>
            <Link
              className="py-4 px-2"
              href={'/(drawer)/bai-tap-3/login'}
            >
              <Text className="text-blue-700 font-bold text-xl">Login now!</Text>
            </Link>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      {/* modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View className='flex-1 justify-center items-center bg-black opacity-85'>
          <View className='bg-white  w-4/5 h-1/6 rounded-lg'>
            <View className='w-full justify-center items-start p-4'>
              <Text className='text-xl font-bold'>{modalText}</Text>
            </View>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              className='items-end justify-center flex-1 pr-9'>
              <Text className='font-bold text-2xl'>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default Register