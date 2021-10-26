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
      <Button
        title='Go To Image Screen'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go To Counter Screen'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go To Color Screen'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go To Square Screen'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Go To Text Screen'
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title='Go To Box Screen'
        onPress={() => navigation.navigate('Box')}
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
