import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import * as firebase from 'firebase';

const Schedule = () => {
  const [schedule, setSchedule] = useState('');
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        // Get the schedule data from Firebase
        firebase
          .database()
          .ref('schedule')
          .on('value', (snapshot) => {
            setSchedule(snapshot.val());
          });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleEditPress = () => {
    // Check if user is admin
    if (user && user.email === 'admin@example.com') {
      setEditing(true);
    }
  };

  const handleSavePress = () => {
    // Update schedule in Firebase
    firebase
      .database()
      .ref('schedule')
      .set(schedule);
    setEditing(false);
  };

  return (
    <View>
      {editing ? (
        <>
          <TextInput
            value={schedule}
            onChangeText={(text) => setSchedule(text)}
          />
          <TouchableOpacity onPress={handleSavePress}>
            <Text>Save</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>{schedule}</Text>
          <TouchableOpacity onPress={handleEditPress}>
            <Text>Edit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Schedule;