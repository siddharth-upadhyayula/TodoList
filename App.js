import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Tasks';

export default function App() {
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
        <TextInput style={styles.input} placeholder={'Write a task'}/>
        <TouchableOpacity>

        </TouchableOpacity>
        <View></View>
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
});
