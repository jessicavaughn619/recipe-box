import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  const contentBlocks = [
    { type: 'text', text: 'The perfect app to store all your recipes! 📖' },
    { type: 'text', text: 'No ads ❌' },
    { type: 'text', text: 'No boring stories 😴' },
    { type: 'text', text: 'Save your favorite recipes for easy viewing! 💚' },
    { type: 'text', text: 'Click on the Recipes tab below to get cookin! 🧑‍🍳' },
    { type: 'icon', name: 'arrow-circle-down', size: 42, color: 'darkgreen' },
  ];

  const staggerDelay = 500;
  const initialDelay = 500;

  const [animatedValues] = useState(contentBlocks.map(() => new Animated.Value(0)));

  useEffect(() => {
    const animations = [];

    contentBlocks.forEach((block, index) => {
      animations.push(
        Animated.timing(animatedValues[index], {
          toValue: 1,
          duration: 1000,
          delay: initialDelay + index * staggerDelay,
          useNativeDriver: true,
        })
      );
    });

    Animated.stagger(staggerDelay, animations).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../images/logo.png')} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Welcome to Recipe Box!</Text>
        {contentBlocks.map((block, index) => (
          <Animated.View key={index} style={{ opacity: animatedValues[index], marginTop: index > 0 ? 15 : 0 }}>
            {block.type === 'text' && (
              <Text style={styles.text}>{block.text}</Text>
            )}
            {block.type === 'icon' && (
              <Icon name={block.name} size={block.size} color={block.color} />
            )}
          </Animated.View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1.25,
    width: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: 'rgba(13, 116, 70, .4)',
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textHeading: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
    color: '#fff',
    fontFamily: 'Arial',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Arial',
  }
});
