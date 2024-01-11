/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View, Text, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    light: '#fff',
    light1: '#f1f1f1',
    light2: '#f7f7f7',
    dark2: '#272b33',
  };

  const calculate = ( title ) => {
    if(title == 'C') {
      setResult('');
    } else if(title == 'DL'){
      setResult(result.substring(0,result.length-1));
    } else if(title == '='){
      const ans = Number(eval(result).toFixed(3)).toString()
      setResult(ans);

    } else setResult(result + title);
  }

  const Btn = ({title, type}) => (
    <TouchableOpacity
    onPress={() => calculate(title)}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(colors.light1, colors.dark2),
        height: 57,
        width: 57,
        margin: 12,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
          textAlignVertical: 'center',
          color: getBtnColor(type),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getBtnColor = (type) => {
    if(type == "top"){
      return '#35FBD6'
    } else if(type == 'right'){
      return '#EB6363'
    } else{
      return getColor(colors.dark, colors.light)
    }
    
  }
  const getColor = (light, dark) => (darkTheme ? dark : light);
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        backgroundColor: getColor(colors.light, colors.dark),
        // alignItems: 'center',
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{true: colors.light2, false: colors.dark2}}
      />
      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          width: '100%',
          textAlign: 'right',
          paddingRight: 20,
          marginTop:220,
          paddingBottom:20
        }}>
        {result}
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center',backgroundColor: getColor(colors.light1, colors.dark1), borderTopRightRadius:20, borderTopLeftRadius:20}}>
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top"/>
        <Btn title="%" type="top"/>
        <Btn title="7" type="number"/>
        <Btn title="8" type="number" />
        <Btn title="9" type="number"/>
        <Btn title="*" type="right" />
        <Btn title="4" type="number"/>
        <Btn title="5" type="number"/>
        <Btn title="6" type="number"/>
        <Btn title="-" type="right" />
        <Btn title="1" type="number"/>
        <Btn title="2" type="number"/>
        <Btn title="3" type="number"/>
        <Btn title="+" type="right" />
        <Btn title="00" type="number"/>
        <Btn title="0" type="number"/>
        <Btn title="." type="number"/>
        <Btn title="=" type="right" />
      </View>
    </View>
  );
};

export default App;
