import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomMenu from '../components/BottomMenu.js';

const Profile = ( {navigation} ) => {
  return (
    <>
    <View style={styles.container} >
        <Text>Profile</Text>
    </View>
    <BottomMenu navigation={navigation}/>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    }
})