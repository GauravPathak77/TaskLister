import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const List = ({ navigation }: any) => {
  useEffect(() => {}, []);

  const addTodo = async () => {
    const doc = addDoc(collection(FIRESTORE_DB, 'todos'), {title: 'I am test', done: false});
    console.log('✈️~ file: List.tsx:12~ addTodo ~ doc:', doc);
  }
  return (
    <View>
      {/* <Text>List</Text> */}
      {/* <Button onPress={() => navigation.navigate('Details')} title="Open Details" /> */}
      <Button onPress={() => addTodo()} title="Add Todo" />
    </View>
  );
};

export default List;