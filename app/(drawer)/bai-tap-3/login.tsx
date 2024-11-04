import { Alert, Image, KeyboardAvoidingView, Modal, Pressable, TextInput, View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./auth-provider";
import { Link, router } from "expo-router";
import { Fontisto, FontAwesome6 } from "@expo/vector-icons";
import { Button } from "~/components/ui/button";

const Login = () => {
  // check auth status
  const { currentUser, login } = useContext(AuthContext);
  useEffect(() => {
    if (currentUser) {
      router.navigate('/(drawer)/bai-tap-3/');
    }
  });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');

  const handleLogin = () => {
    if (!email || !password) {
      setModalText('Please enter email and password');
      setModalVisible(true);
      return;
    }
    const user = login(email, password);
    if (!user) {
      setModalText('Email or password is incorrect');
      setModalVisible(true);
      return;
    } else {
      setModalText('Login successfully');
      setModalVisible(true);
      router.navigate('/(drawer)/bai-tap-3/');
    }
  }

  return (
    <>
      <ScrollView className="flex-1 bg-slate-100 px-12">
        <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          behavior="height"
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
            <Text className='font-bold text-3xl mt-3'>Welcome</Text>
          </View>
          <View className="mt-6">
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
            {/* forgot password */}
            <View className="items-end">
              <Link
                href={'/(drawer)/bai-tap-3/register'}
              >
                <Text className="text-lg text-pink-500">Forgot password?</Text>
              </Link>
            </View>
            {/* login */}
            <Button
              className="mt-8 bg-orange-500"
              size={'lg'}
              onPress={handleLogin}
            >
              <Text className="font-bold">LOG IN</Text>
            </Button>
          </View>
          {/* google, fb */}
          <View className="justify-center items-center mt-6">
            <Text className="font-bold text-2xl">Or login with</Text>
            <View className="flex-row mt-6">
              <Image
                source={{
                  uri: "https://toppng.com/uploads/preview/facebook-icon-facebook-icon-red-11563140071g3x2ama4cd.png"
                }}
                className="w-16 h-16 mx-4"
              />
              <Image
                source={{
                  uri: "https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png"
                }}
                className="w-16 h-16 mx-4"
              />
            </View>
            <View className="flex-row mt-6 justify-center items-center">
              <Text className="text-xl">Don't have an account?</Text>
              <Link
                href={'/(drawer)/bai-tap-3/register'}
              >
                <Text className="text-blue-700 font-bold text-xl"> Sign up here!</Text>
              </Link>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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

export default Login