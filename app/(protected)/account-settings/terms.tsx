import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InfoContentScreen from '@/component/InfoContentScreen';

const Terms = () => {
    const termsData = [
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
  "Lorem ipsum dolor sit amet consectetur. Imperdiet iaculis convallis bibendum massa id elementum consectetur neque mauris.",
];
  return (
    <View>
      <InfoContentScreen title="Terms & Conditions" data={termsData} />
    </View>
  )
}

export default Terms

const styles = StyleSheet.create({})