import Post from '~/components/Post';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function Home() {
  const data = [
    {
      id: 0,
      userName: "Antony",
      avatarLink: "https://media.bongda.com.vn/files/phong.huynh/2022/09/20/gettyimages-1242946288-612x612-2003.jpg",
      contentText: "Manchester is red ღ☝🌴.",
      contentImageLink: "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/05/doi-hinh-mu-thumb.jpg",
      likeCount: 100,
      commentCount: 200,
      shareCount: 50,
    },
    {
      id: 1,
      userName: "Ronaldo",
      avatarLink: "https://vcdn1-thethao.vnecdn.net/2009/01/13/ro1-1231779600.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=dg-n26sa43QWgUm6grklTQ",
      contentText: "Manchester is blue ღ☝🌴.",
      contentImageLink: "https://cdnphoto.dantri.com.vn/YAn_8PcQLRUEy2966LGeyjF2sRU=/thumb_w/1020/2024/10/06/ronaldo-1728175252865.jpg",
      likeCount: 1200,
      commentCount: 500,
      shareCount: 250,
    },
    {
      id: 2,
      userName: "Messi",
      avatarLink: "https://vcdn1-thethao.vnecdn.net/2022/12/19/fkscvpyvqaa1fv9-jfif-167139012-9444-5939-1671391905.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=0T4yQpiKD-qYZqJ0l49_3w",
      contentText: "world cup ღ☝🌴.",
      contentImageLink: "https://www.fcbarcelonanoticias.com/uploads/s1/20/61/08/barca-206108.jpeg",
      likeCount: 1000,
      commentCount: 300,
      shareCount: 140,
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Social Media Feed</Text>
          </View>
          <View style={styles.content}>
            {data.map((post, index) => (
              <Post
                post={post}
                key={index}
              ></Post>
            ))}
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#3598db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'white',
  },
  content: {
    backgroundColor: '#c9c9c9',
    padding: 10,
  },
});
