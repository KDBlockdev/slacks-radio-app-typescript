import React, { useState } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import * as Google from 'expo-google-app-auth';

interface Props {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
  accessToken: string;
}

const GoogleTimesheet = (props: Props) => {
  const [timesheet, setTimesheet] = useState(null);

  const getTimesheet = async () => {
    const client = new Google.Auth.OAuth2({
      clientId: props.clientId,
      clientSecret: props.clientSecret,
      redirectUrl: props.redirectUrl
    });
    client.setCredentials({ access_token: props.accessToken });

    const timesheetApi = Google.Calendar({ version: 'v3', auth: client });
    try {
      const res = await timesheetApi.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: 'startTime'
      });
      setTimesheet(res.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text onPress={getTimesheet}>Get Timesheet</Text>
      {timesheet &&
        timesheet.map((item, index) => (
          <View key={index}>
            <Text>{item.summary}</Text>
            <Text>{item.start.dateTime}</Text>
            <Text>{item.end.dateTime}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default GoogleTimesheet;
