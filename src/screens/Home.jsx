import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button onPress={() => navigation.navigate('sellers')} ></Button>
      <Text>Home</Text>
    </View>
  )
}

export default Home