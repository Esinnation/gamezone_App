import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import { images } from '../styles/global'


const ReviewDetails = ({navigation,route}) => {
  const {title,body,rating}= route.params
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={style.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View> 
      </Card>
    </View>
  )
}
const style =StyleSheet.create({
  rating:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee '
  }
})

export default ReviewDetails
