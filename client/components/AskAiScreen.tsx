import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UploadImageScreen = () => {
  // Placeholder function for image upload
  const handleUpload = () => {
    // Later, you can integrate image picker and upload functionality
    console.log('Image uploaded');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Image</Text>
      <Button title="Choose Image" onPress={handleUpload} />
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

export default UploadImageScreen;