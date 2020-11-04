import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ApprovalRender, Button } from "../components";
import firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";

interface Props {
  navigation: any;
}

const Component: FC<Props> = (props) => {
  const [posts, setPosts] = useState<any>(null);

  const fetchPendingPosts = async () => {
    firebase
      .firestore()
      .collection("posts")
      .where("approved", "==", false)
      .onSnapshot((querySnapshot) => {
        const documents = querySnapshot.docs;
        setPosts(documents);
      });
  };

  const onApprove = async (id: string) => {
    const post = await firebase.firestore().collection("posts").doc(id).get();
    post.ref.set({ approved: true }, { merge: true });
  };

  const onReject = async (id: string) => {
    await firebase.firestore().collection("posts").doc(id).delete();
  };

  useEffect(() => {
    fetchPendingPosts();
  }, []);

  return (
    <View style={styles.container}>
      <Button title='Back' onPress={() => props.navigation.goBack()} />
      <Text>Dashboard Screen</Text>
      <View style={{ height: "50%" }}>
        <FlatList
          data={posts}
          renderItem={({ item }: any) => (
            <ApprovalRender
              msg={item.data().msg}
              approved={item.data().approved}
              timeStamp={item.data().timeStamp}
              onApprove={() => onApprove(item.id)}
              onReject={() => onReject(item.id)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
