import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InfoContentScreen from '@/component/InfoContentScreen';

export const options = {
  tabBarStyle: { display: "none" },
};
const About = () => {
    const aboutData = [
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
];
  return (
    <View>
      <InfoContentScreen title="About Us" data={aboutData} />
    </View>
  )
}

export default About

const styles = StyleSheet.create({})