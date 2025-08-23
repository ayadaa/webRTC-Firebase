import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Button from "./components/Button";
import Video from "./components/Video";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button iconName="videocamera" backgroundColor="grey" /> */}
      <Video />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})



// import { useEffect } from "react";
// import { FIREBASE_AUTH } from "./src/firebase/config";
// import { connectSocket } from "./src/utils/socket";

// import StackNavigator from "./src/navigation/StackNavigator";

// export default function App() {
//   useEffect(() => {
//     const unsubscribe = FIREBASE_AUTH.onAuthStateChanged((user) => {
//       if (user) {
//         // Connect socket when user is authenticated
//         connectSocket(user.uid);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return <StackNavigator />;
// }
