import * as React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed';
import { useAuth } from '../context/AuthContext';


export default function TabOneScreen() {

  const auth = useAuth()

  console.log({ auth })

  return (
    <View style={styles.container}>
      {!auth.isSignedIn ?
        < Button title="sign In" onPress={auth.signIn} /> :
        < Button title="sign Out" onPress={auth.signOut} />
      }
      <Text style={styles.title}>{auth.isSignedIn ? "signed in" : "signed out"}</Text>
      {auth.isSignedIn ?
        <Text style={styles.title}>Welcome, {auth.email}</Text>
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
