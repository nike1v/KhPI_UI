import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    name: ''
  }

  fetching = async () => {
    try {
      let res = await (await fetch('https://localhost:3000/')).json();
      console.log(res);
      this.setState({
        name: res
      })
    }catch (error){
      console.log(error);
    } 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test it out</Text>
        <Button
          onPress={this.fetching}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>{this.state.name}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});