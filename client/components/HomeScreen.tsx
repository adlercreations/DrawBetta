import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define your stack parameter list
type RootStackParamList = {
  'Upload Image': undefined;
  'Ask AI': undefined;
  'Develop Images': undefined;
};

// Define props for navigation
type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Upload Image'>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the AI Art Assistant</Text>
      <Button
        title="Upload an Image"
        onPress={() => navigation.navigate('Upload Image')}
      />
      <Button
        title="Ask the AI for Composition Ideas"
        onPress={() => navigation.navigate('Ask AI')}
      />
      <Button
        title="Develop Your Uploaded Images"
        onPress={() => navigation.navigate('Develop Images')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
