import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextInputExample = () => 
{
  const [Name, onChangeName] = React.useState('Full Name');
  const [Age, onChangeNumber] = React.useState('');
  const [Add, onChangeAdd] = React.useState('Address');
  const [School, onChangeSchool] = React.useState('School');
  const [Course, onChangeCourse] = React.useState('Course');
  const [Email, onChangeEmail] = React.useState('Email');
  const [ConNum, onChangeConNum] = React.useState('');
  const [value, onChangeText] = React.useState('About Me:');

  return  (
    
        <SafeAreaProvider>
          <SafeAreaView>
              
            <View style={styles.inputContainer}>
            <Icon name="user" size={30} color="#Ff0000" style={styles.icon} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeName}
              value={Name}
              placeholder="Full Name"
            />
          </View>

            <View style={styles.inputContainer}>
            <Icon name="birthday-cake" size={30} color="#Ff0000" style={styles.icon} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={Age}
              placeholder="Age"
              keyboardType="numeric"
            />
            </View>
            
            <View style={styles.inputContainer}>
            <Icon name="home" size={30} color="#Ff0000" style={styles.icon} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeAdd}
              value={Add}
              placeholder="Address"
            />
            </View>

            <View style={styles.inputContainer}>
            <Icon name="building" size={30} color="#Ff0000" style={styles.icon} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeSchool}
              value={School}
              placeholder="School"
            />
            </View>

            <View style={styles.inputContainer}>
            <Icon name="book" size={30} color="#Ff0000" style={styles.icon} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeCourse}
              value={Course}
              placeholder="Course"
            />
            </View>

            <View style={styles.inputContainer}>
            <Icon name="envelope" size={30} color="#Ff0000" style={styles.icon} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={Email}
              placeholder="Email"
            />
            </View>

            <View style={styles.inputContainer}>
            <Icon name="phone" size={30} color="#Ff0000" style={styles.icon} />
            <TextInput
              style={styles.input}
              onChangeText={onChangeConNum}
              value={ConNum}
              placeholder="Contact Number"
              keyboardType="numeric"
            />
            </View>

          <View style={styles.inputContainer}>
          <Icon name="info" size={30} color="#Ff0000" style={styles.icon} />
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={text => onChangeText(text)}
              value={value}
              style={styles1.textInput}
              />
              </View>
        
        

          </SafeAreaView>
        </SafeAreaProvider>
  
  );

};

const styles1 = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    flex: 1,
  },
});

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 5,
    margin: 15,
    padding: 7,
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 0,
    padding: 10,
  },
});


 

export default TextInputExample;


