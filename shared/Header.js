import React from 'react'
import {MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, ImageBackground,SafeAreaView } from 'react-native'

const Header = ({navigation,title}) => {
  const openMenu =()=>{
    navigation.openDrawer()
  }
  return (
    <SafeAreaView>
      <ImageBackground source={require('../assets/game_bg.png')}  style={styles.header}>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
        <Text style={styles.headerText}>{title}</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
    width:'100%',
    height:60,
    paddingTop:24,
    paddingBottom:8,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'#eee',    
  },
  headerText:{
    fontWeight:'bold',
    fontSize:20,
    color:'#333',
    letterSpacing:1
  }, 
  icon:{
    position:'absolute',
    left:16,
    top:24,

  }
})
export default Header
