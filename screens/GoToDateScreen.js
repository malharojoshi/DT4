import React, {Component} from 'react'
import {View, TextInput, Image, StyleSheet,Text,TouchableOpacity} from 'react-native'
export default class GoToDateScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      month: "",
      year: "",
      day: ""
  }
}
render(){
    return(
      <View>
      <TextInput
          style={styles.formTextInput}
          placeholder ={"Month"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              month: text
            })
          }}
        />

      <TextInput
          style={styles.formTextInput}
          placeholder ={"year"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              year: text
            })
          }}
        />

      <TextInput
          style={styles.formTextInput}
          placeholder ={"day"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              day: text
            })
          }}
        />
      
        <View>
        <TouchableOpacity
           style={styles.button}
           onPress={()=>this.goToDate}
           >
           <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity>
        </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
}
})
