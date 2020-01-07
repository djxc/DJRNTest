/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';

import DJmap from './source/pages/DJmap';
import Attribute from './source/pages/attribute';
import Home from './source/pages/Home';
import Moment from './source/pages/moment';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

/**
 * 配置路由,程序主要包含四个组件功能
 * 1、四个功能之间的相互独立，其跳转也是独立的，不需要使用react-navigation进行跳转
 *
 * 2、而每一个功能内的页面跳转需要使用react-navigation进行
 */

function App() {
  const [title, setTitle] = useState('app');
  const [content, setContent] = useState(Home);
  return (
    <View style={styles.app}>
      <Text>{title}</Text>
      {content}
      {/* footer组件 */}
      <View style={styles.footer}>
        <TouchableHighlight
          style={styles.footerHome}
          onPress={() => btnOnPress('主页', Home)}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>主页</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.footerHome}
          onPress={() => btnOnPress('地图', DJmap)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>地图</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerHome}
          onPress={() => btnOnPress('属性', Attribute)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>属性</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerHome}
          onPress={() => btnOnPress('动态', Moment)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>动态</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  function btnOnPress(title_, content_) {
    setTitle(title_);
    setContent(content_);
  }
}

const styles = StyleSheet.create({
  app: {
    width: '100%',
    height: '100%',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
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

export default App;
