
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

const App  = () => {
 const users = [
  {
    id : 1,
    name : 'Amit'
  },
  {
    id : 2,
    name : 'Sunil'
  },
  {
    id : 3,
    name : 'Chaman'
  },
  {
    id : 4,
    name : 'Sharma'
  },
  {
    id : 5,
    name : 'Sunil'
  },
  {
    id : 6,
    name : 'Chaman'
  },
  {
    id : 7,
    name : 'Sharma'
  },
  {
    id : 8,
    name : 'Sunil'
  },
  {
    id : 9,
    name : 'Chaman'
  },
  {
    id : 10,
    name : 'Sharma'
  }


  
 ]
  return (
    <View>
        <Text style={{ fontSize : 31}}> List with map function </Text>
        <ScrollView style={{marginBottom : 30}}>
        {
          users.map((item) => <Text style={styles.item}> {item.name} </Text>)
        }
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
  item : {
    fontSize : 24,
    padding : 10,
    color : '#fff',
    backgroundColor : 'blue',
    borderColor : "black",
    margin : 10
  }
});

export default App;
