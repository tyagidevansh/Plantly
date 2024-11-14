import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '@/theme';
import { useUserStore } from '@/store/userStore';
import { PlantlyButton } from '@/components/PlantlyButton';

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  return (
    <View style={styles.container}>
      <PlantlyButton title = "back to onboarding" onPress={toggleHasOnboarded}/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});