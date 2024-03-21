import { StyleSheet, Text, View,Modal,SafeAreaView, FlatList,TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import {MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'


const Home =   ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    {title:'lorem ipsufffffff rreif',rating:5,body:'suiiiiiiiiiiii',key:'1'},
    {title:'maybe lorem ipsufffffff rreif',rating:4,body:'Niceeee',key:'2'},
    {title:'maybe lorem ipsufffffff rreif',rating:4,body:'Awesome',key:'3'},
  ])
  const addReview =(review)=>{
    review.key =Math.random().toString()
    setReviews(prevState=>{
      return [review,...prevState]
    })
    setModalOpen(false)
  }
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
          <View style={{...styles.modalContent,...styles.modalClose}}>
          <MaterialIcons 
          name='close'
          onPress={()=>setModalOpen(false)}
          size={24}
          style={styles.modalToggle}
          
        />
            <ReviewForm addReview={addReview}/>
          </View>

        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons 
        name='add'
        onPress={()=>setModalOpen(true)}
        size={24}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=> navigation.navigate('Review Details',item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title} </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  modalClose:{
    marginBottom:0,
    marginTop:20
  },
  modalContent:{
    flex:1,
  }
})

export default Home
