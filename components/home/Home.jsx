import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Button,
  Easing,
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = ({ navigation }) => {
  const components = [
    { title: "<View>", description: "A container component used for layout." },
    { title: "<Text>", description: "Used to display text on the screen." },
    { title: "<Button>", description: "A button for user interaction." },
    { title: "<TextInput>", description: "Used for capturing user input." },
    { title: "<ScrollView>", description: "A scrolling container." },
    { title: "<FlatList>", description: "Renders a list of data." },
    { title: "<Image>", description: "Displaying different types of images." },
    { title: "<TouchableOpacity>", description: "A wrapper for handling press events." },
    { title: "<TouchableHighlight>", description: "A wrapper for handling touchable highlight interactions." },
    { title: "<Modal>", description: "A component for rendering modal dialogs." },
    { title: "<ActivityIndicator>", description: "Shows a loading spinner." },
    { title: "<Alert>", description: "Displays a native alert message." },
    { title: "<Picker>", description: "A dropdown selection component." },
    { title: "<Switch>", description: "A toggle component for boolean values." },
    { title: "<Slider>", description: "A slider for selecting a value within a range." },
  ];

  const openWebsite = () => {
    Linking.openURL('https://reactnative.dev').catch((err) =>
      console.error("Failed to open URL", err)
    );
  };

  const animationRefs = useRef(
    components.map(() => new Animated.Value(-50))
  ).current;

  const animateItem = (index) => {
    Animated.timing(animationRefs[index], {
      toValue: 1,
      duration: 2000,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item, index }) => {
    const animatedStyle = {
      opacity: animationRefs[index],
      transform: [
        {
          translateY: animationRefs[index].interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0],
          }),
        },
      ],
    };

    return (
      <Animated.View style={[styles1.card, animatedStyle]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', { component: item })}
        >
          <Text style={styles1.cardTitle}>{item.title}</Text>
          <Text style={styles1.cardDescription}>{item.description}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  useEffect(() => {
    components.forEach((_, index) => {
      setTimeout(() => animateItem(index), index * 100);
    });
  }, []);

  return (
    <View style={styles1.container}>
      <View style={header.header}>
        <Text style={header.Text}>React Native</Text>
        <Button title="Get Started" color="#ff6347" onPress={openWebsite} />
      </View>

      <View style={styles1.home}>
        <View>
          <Image
            source={{
              uri: 'https://miro.medium.com/v2/resize:fit:600/1*ZjIhdWXPOt8AAQAzxrYsnw.png',
            }}
            style={styles1.image}
          />
          <Text style={styles1.Text2}>React Native</Text>
          <Text style={header.Text}>Learn once, write anywhere.</Text>
          <Button
            title="Features"
            color="#ff6347"
            onPress={() => navigation.navigate('Features')}
          />
        </View>
      </View>
      <View style={styles1.container}>
        <Text style={styles1.Text}>Core Components</Text>
        <Animated.FlatList
          data={components}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          contentContainerStyle={styles1.listContainer}
        />
        <Text style={styles1.footer}>Copyright © 2024 Meta Platforms, Inc.</Text>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  Text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  Text2: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#333',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    color: 'white',
    fontSize: 14,
  },
  home: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    color: 'white',
    textAlign: 'center',
    padding: 5,
  },
  image: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

const header = StyleSheet.create({
  header: {
    backgroundColor: '#1e90ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  Text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
