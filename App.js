import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Tasks';

export default function App() {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    console.log('')
  }
  return (
    <View style={styles.container}>
      
      <View style = {styles.tasksWrapper}> 
        <Text style = {styles.sectionTitle}>Today's Tasks</Text>
      
      
        <View style = {styles.items}>
          <Task text = {"Task 1"}/>
          <Task text = {"Task 2"}/>
          <Task text = {"Task 3"}/>


        </View>
      </View>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
},
tasksWrapper:{
  paddingTop:80,
  paddingHorizontal:20
},
sectionTitle:{
  fontSize:24,
  fontWeight:'bold'
},
items:{
  marginTop:30,
},

writeTaskWrapper:{
  position:'absolute',
  bottom:60,
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center'
},
input:{
  paddingVertical:15,
  paddingHorizontal:15,
  borderRadius:60,
  backgroundColor:'#FFF',
  width:250,
  borderWidth: 1,
  borderColor:'#C0C0C0',
},
addWrapper:{
  width:60,
  height:60,
  backgroundColor:'#FFF',
  borderRadius: 60,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,
  borderColor:'#C0C0C0',
},
addText:{},
});
