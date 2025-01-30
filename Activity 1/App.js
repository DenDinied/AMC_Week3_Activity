import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => 
{
  const [Name, onChangeName] = React.useState('Full Name');
  const [Age, onChangeNumber] = React.useState('');
  const [Add, onChangeAdd] = React.useState('Address');
  const [School, onChangeSchool] = React.useState('School');
  const [Course, onChangeCourse] = React.useState('Course');
  const [Email, onChangeEmail] = React.useState('Email');
  const [ConNum, onChangeConNum] = React.useState('');

  return  (
    
        <SafeAreaProvider>
          <SafeAreaView>
            
            <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              value={Name}
              placeholder="Full Name"
            />

            
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={Age}
              placeholder="Age"
              keyboardType="numeric"
            />
            
            <TextInput
              style={styles.input}
              onChangeText={onChangeAdd}
              value={Add}
              placeholder="Address"
            />

            <TextInput
              style={styles.input}
              onChangeText={onChangeSchool}
              value={School}
              placeholder="School"
            />

            <TextInput
              style={styles.input}
              onChangeText={onChangeCourse}
              value={Course}
              placeholder="Course"
            />

            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={Email}
              placeholder="Email"
            />

            <TextInput
              style={styles.input}
              onChangeText={onChangeConNum}
              value={ConNum}
              placeholder="Contact Number"
              keyboardType="numeric"
            />


        

          </SafeAreaView>
        </SafeAreaProvider>
  
  );

};





const styles = StyleSheet.create({
  input: 
  {
    height: 40,
    margin: 10,
    borderWidth: 5,
    padding: 10,
  },

});

export default TextInputExample;