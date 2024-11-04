import { useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, Switch, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useColorScheme } from '~/lib/useColorScheme';
import { Text } from '~/components/ui/text';
import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';

const App = () => {
  const { isDarkColorScheme, toggleColorScheme } = useColorScheme();
  const [notification, setNotification] = useState<boolean>(true);
  const [feedback, setFeedback] = useState<string>('');
  const [faq, setFaq] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');

  const handleSubmit = () => {
    if (feedback.length === 0) {
      setModalText('Feedback is required');
      setModalVisible(true);
      return;
    }
    if (notification) {
      setModalText('Thank you for your feedback');
      setModalVisible(true);
    }
    setFaq([...faq, feedback]);
  }

  return (
    <>
      <ScrollView className='bg-blue-100 dark:bg-blue-900'>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className='flex-1'
        >
          <View className='flex-1 '>
            {/* header */}
            <View className='items-center justify-center mt-10'>
              <Image
                source={{
                  uri: 'https://www.scorchsoft.com/public/capabilities/head/react-native-logo-square.webp'
                }}
                className='w-32 h-32 rounded-full object-cover'
              />
              <Text className='font-bold text-xl mt-3'>React Native App</Text>
            </View>
            <View>
              {/* darkmode */}
              <TouchableWithoutFeedback onPress={() => {
                toggleColorScheme();
              }}>
                <View className='justify-between items-center flex-row pl-8 pr-7'>
                  <Text className='text-lg'>Dark Mode</Text>
                  <Switch
                    value={isDarkColorScheme}
                  />
                </View>
              </TouchableWithoutFeedback>
              {/* notifications */}
              <TouchableWithoutFeedback onPress={() => {
                setNotification(!notification);
                Keyboard.dismiss();
              }}>
                <View className='justify-between items-center flex-row pl-8 pr-7'>
                  <Text className='text-lg'>Notifications</Text>
                  <Switch
                    value={notification}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            {/* feedback form */}
            <View className='px-6'>
              <Text className='text-xl font-semibold'>Feedback</Text>
              <Textarea
                value={feedback}
                placeholder='Enter your feedback'
                className='mt-2'
                onChangeText={(text) => setFeedback(text)}
              />
              <Button className='mt-4 bg-blue-500'
                size={'lg'}
                onPress={() => {
                  handleSubmit();
                }}
              >
                <Text>Submit</Text>
              </Button>
            </View>
            <View className='m-6'>
              <Text className='font-bold text-2xl'>Frequently Asked Questions</Text>
              {/* answer */}
              <ScrollView className='h-36 mt-5 border-2 border-blue-700 flex-1'>
                {
                  faq.map((item, index) => {
                    return (
                      <View key={index} className='border-b-2 border-gray-300 dark:border-gray-700 p-4'>
                        <Text>Q: {item}</Text>
                      </View>
                    )
                  })
                }
              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View className='flex-1 justify-center items-center bg-black opacity-85'>
            <View className={`${!isDarkColorScheme ? 'bg-white' : 'bg-blue-800'} w-4/5 h-1/6 rounded-lg `}>
              <View className='w-full justify-center items-start p-4'>
                <Text className='text-2xl font-bold'>{modalText}</Text>
              </View>
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                className='items-end justify-center flex-1 pr-9'>
                <Text className='font-bold text-2xl'>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView >
    </>
  );
}

export default App;