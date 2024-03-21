import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card:{
    borderRadius:6,
    elevation:3,
    backgroundColor: '#FFFFFF',
    shadowOffset:{width:1,height:1},
    shadowColor:'#333',
    shadowOpacity:0.3,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6
  },
  cardContent:{
    margin:18,
  }
})
export default Card
