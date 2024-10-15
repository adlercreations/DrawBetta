import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';  // Import from App.tsx

// Define the navigation prop for Develop Images
type DevelopImagesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Develop Images'>;
  route: RouteProp<RootStackParamList, 'Develop Images'>;
};

// Dummy data
const dummyImages = [
  { id: '1', url: 'https://example.com/image1.jpg', description: 'Image 1' },
  { id: '2', url: 'https://example.com/image2.jpg', description: 'Image 2' },
];

const DevelopImagesScreen: React.FC<DevelopImagesScreenProps> = ({ navigation }) => {
  const renderImageCard = ({ item }: { item: typeof dummyImages[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ImageCanvas', { url: item.url })}
    >
      <Image source={{ uri: item.url }} style={styles.image} />
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Uploaded Images</Text>
      <FlatList
        data={dummyImages}
        renderItem={renderImageCard}
        keyExtractor={(item) => item.id}
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
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default DevelopImagesScreen;


// import React from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RouteProp } from '@react-navigation/native';

// // Define your stack parameter list
// type RootStackParamList = {
//   'Develop Images': undefined;
//   'ImageCanvas': { url: string }; // If this route has params like image URL
// };

// // Define props for navigation and route
// type DevelopImagesScreenProps = {
//   navigation: NativeStackNavigationProp<RootStackParamList, 'Develop Images'>;
//   route: RouteProp<RootStackParamList, 'Develop Images'>;
// };

// // Dummy data
// const dummyImages = [
//   { id: '1', url: 'https://example.com/image1.jpg', description: 'Image 1' },
//   { id: '2', url: 'https://example.com/image2.jpg', description: 'Image 2' },
// ];

// const DevelopImagesScreen = ({ navigation }: DevelopImagesScreenProps) => {
//   const renderImageCard = ({ item }: { item: typeof dummyImages[0] }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() => navigation.navigate('ImageCanvas', { url: item.url })}
//     >
//       <Image source={{ uri: item.url }} style={styles.image} />
//       <Text>{item.description}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Your Uploaded Images</Text>
//       <FlatList
//         data={dummyImages}
//         renderItem={renderImageCard}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 10,
//     marginVertical: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 10,
//   },
// });

// export default DevelopImagesScreen;
