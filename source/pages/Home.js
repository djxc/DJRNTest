import React, {useState, useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeIndex from './home/index';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  Button,
  Alert,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Home(props) {
  const [name, setName] = useState('hello');
  return (
    <View style={styles.textPosition}>
      {/* 头部组件 */}
      <View style={styles.header}>
        <Text>备忘录1</Text>
      </View>

      {/* 主页 */}
      <View style={styles.mainBody}>
        <Text>{name}</Text>
        <TextInput
          placeholder="user name"
          onChangeText={text => changeName(text)}
        />
        {/* <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Dan'},
              {key: 'Dominic'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          /> */}
        <ScrollView>
          <Image source={require('../img/photo1.png')} style={styles.image} />
          <Image source={require('../img/photo1.png')} style={styles.image} />
          <Image source={require('../img/photo1.png')} style={styles.image} />
          <Image source={require('../img/photo1.png')} style={styles.image} />
          <Image source={require('../img/photo1.png')} style={styles.image} />
          <Image source={require('../img/photo1.png')} style={styles.image} />
          <Image source={require('../img/photo1.png')} style={styles.image} />
        </ScrollView>
      </View>
    </View>
  );

  function changeName(text) {
    setName(text);
  }

  function btnOnPress() {
    props.navigation.navigate('Home');
  }

  function getData() {
    fetch('http://www.bhaes.top:8082/T3D_location.json')
      .then(data => {
        if (data.status === 200) {
          console.log('**************************');
          Alert.alert(data.formData);
          for (let d in data) {
            console.log(d);
          }
        }
      })
      .catch(error => {
        Alert.alert(error);
      });
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    height: '3%',
    width: '100%',
  },
  mainBody: {
    backgroundColor: 'yellow',
    width: '100%',
    height: '92%',
  },
  button: {
    marginBottom: 10,
    width: 60,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  textPosition: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 160,
    height: 150,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    position: 'absolute',
    bottom: '0%',
    width: '100%',
    height: '5%',
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    backgroundColor: Colors.primary,
    flex: 1,
    flexDirection: 'row',
  },
  footerHome: {
    flex: 1,
    alignItems: 'center',
  },
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeIndex,
    Detail: Home,
  },
  {
    initialRouteName: 'Detail',
  },
);

const AppContainer = createAppContainer(AppNavigator);
function App() {
  return <AppContainer />;
}
export default App;
