import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InfoContentScreen from '@/component/InfoContentScreen';

const Privacy = () => {
    const privacyData = [
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
];
  return (
    <View>
      <InfoContentScreen title="Privacy Policy" data={privacyData} />
    </View>
  )
}

export default Privacy

const styles = StyleSheet.create({})