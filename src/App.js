import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet
} from 'react-native';

import Button from './components/Button';
import Display from './components/Display';


const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState(null);
  const [current, setCurrent] = useState(0);
  const [values, setValues] = useState([0, 0]);


  function addDigit(num) {
    if(num === "." && displayValue.includes('.')) {
      return
    }

    let newValue = displayValue + num;

    if(displayValue === '0') {
      newValue = num;
      setDisplayValue(num);
    } else {
      setDisplayValue(newValue);
    }

    if(operation === null) {
      setValues([
        newValue,
        0
      ]);
    } else {
      const lastValue = values[0];

      setValues([
        lastValue,
        newValue
      ]);
    }
  }

  function clearMemory() {
    setDisplayValue('0');
    setOperation(null);
  }

  function settingOperation(operator) {
    if(operator === '=' && operator !== null) {
      const result = eval(`${parseFloat(values[0])} ${operation} ${parseFloat(values[1])}`);

      setDisplayValue(result);

      setOperation(null);

      setValues([
        result,
        0
      ]);
      return;
    } 

    setOperation(operator);
    setDisplayValue('0');
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.button}>
        <Button label={'C'} triple onClick={clearMemory} />
        <Button label={'/'} operation onClick={settingOperation} />
        <Button label={'7'} onClick={addDigit} />
        <Button label={'8'} onClick={addDigit} />
        <Button label={'9'} onClick={addDigit}/>
        <Button label={'x'} operation onClick={() => settingOperation('*')}  />
        <Button label={'4'} onClick={addDigit}/>
        <Button label={'5'} onClick={addDigit}/>
        <Button label={'6'} onClick={addDigit}/>
        <Button label={'-'} operation  onClick={settingOperation}  />
        <Button label={'1'} onClick={addDigit}/>
        <Button label={'2'} onClick={addDigit}/>
        <Button label={'3'} onClick={addDigit}/>
        <Button label={'+'} operation  onClick={settingOperation} />
        <Button label={'0'} double onClick={addDigit}/>
        <Button label={','} onClick={() => addDigit('.')}  />
        <Button label={'='} operation onClick={settingOperation}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    flexDirection: "row",
    flexWrap: "wrap",
  }
});

export default App;
