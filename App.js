import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import  Weather  from './components/Weather';

export default function App() {
  const [isLoading,setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
    {isLoading ? (
      <Text>Fetching The Weather...</Text>
    ) : (
        <Weather />
    )}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
