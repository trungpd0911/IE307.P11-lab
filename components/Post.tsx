import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

const Post = (data: any) => {
  const { post } = data;
  const postId = post.id;
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const [commentCount, setCommentCount] = useState(post.commentCount);
  const [shareCount, setShareCount] = useState(post.shareCount);

  const actionLike = (postId: number) => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <View style={styles.post}>
      {/* avatar */}
      <View style={styles.headerPost}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: post.avatarLink
            }}
            style={styles.avatar} />
        </View>
        <Text style={styles.userText}>{post.userName}</Text>
      </View>
      <View style={styles.bodyPost}>
        {/* content */}
        <Text style={styles.contentText}>{post.contentText}</Text>
        {/* image */}
        <Image
          source={{
            uri: post.contentImageLink
          }}
          style={styles.contentImage}
        />
      </View>
      {/* count of like, comment, share */}
      <View style={styles.actionCountPost}>
        <View>
          <Text style={styles.countText}>{likeCount} Likes</Text>
        </View>
        <View>
          <Text style={styles.countText}>{commentCount} Comments</Text>
        </View>
        <View>
          <Text style={styles.countText}>{shareCount} Shares</Text>
        </View>
      </View>
      {/* action like, comment, share */}
      <View style={styles.actionPost}>
        <TouchableOpacity style={{ flexDirection: 'row' }}
          onPress={() => {
            actionLike(postId);
          }}
        >
          <AntDesign name={isLiked ? 'like1' : 'like2'} size={20}
            style={{ color: isLiked ? 'blue' : 'black' }}
          />
          <Text style={styles.actionText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row' }}
          onPress={() => {
            setCommentCount(commentCount + 1);
          }}
        >
          <AntDesign name={'message1'} size={20} />
          <Text style={styles.actionText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row' }}
          onPress={() => {
            setShareCount(shareCount + 1);
          }}
        >
          <MaterialCommunityIcons name={'share-outline'} size={25} />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
  headerPost: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'lightblue',
  },
  avatarWrapper: {
    marginRight: 20,
    width: 50,
    height: 50,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    // borderRadius: '50%',
  },
  userText: {
    fontWeight: 'bold',
  },
  bodyPost: {
    marginTop: 4,
  },
  contentText: {
    fontSize: 16,
  },
  contentImage: {
    width: '100%',
    // height: 200,
    marginTop: 10,
    aspectRatio: 16 / 9,
  },
  actionCountPost: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  countText: {
    fontSize: 16,
    fontWeight: '200',
  },
  actionPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  actionText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'bold',
  }
})

export default Post;    