import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>hi</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go To Components Demo'
      />
      <Button
        title='Go To List Demo'
        onPress={() => navigation.navigate('List')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
