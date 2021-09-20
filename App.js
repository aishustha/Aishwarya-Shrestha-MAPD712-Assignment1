/**
* Assignment 1 - Aishwarya Shrestha - 301138662
*/

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function Assignment01() {
  const [metric, setMetric] = React.useState(false);

  return (
    <View>
      <Text style={styles.title}>BMI Calculator</Text>
      <View style={styles.buttonTabs}>
        <TouchableOpacity
          style={styles.buttonInnerTabs}
          activeOpacity={0.8}
          onPress={() => setMetric(false)}
          style={{ backgroundColor: metric ? '#ec4269cc' : '#EC4269', width: '50%'}}
          >
          <Text style={styles.buttonInnerText}>Standard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonInnerTabs}
          activeOpacity={0.8}
          onPress={() => setMetric(true)}
          style={{ backgroundColor: metric ? '#EC4269' : '#ec4269cc', width: '50%'}}
          >
          <Text style={styles.buttonInnerText}>Metric</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContent}>
        <Text style={styles.heightWeightTitle}>
          Height ({metric ? 'inchs' : 'centimeters'})
        </Text>
        <TextInput
          style={styles.heightWeightTextInput}
          placeholder="Height"
          keyboardType="numeric"
        />
        <Text style={styles.heightWeightTitle}>
          Weight ({metric ? 'pounds' : 'kilograms'})
        </Text>
        <TextInput
          style={styles.heightWeightTextInput}
          placeholder="Weight"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.calculateButtonContent}>
        <TouchableOpacity style={styles.calculateButton} activeOpacity={0.8}>
          <Text style={styles.calculateButtonText}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} activeOpacity={0.8}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calculateResult}>
        <Text style={styles.calculateResultTitle}>Your Results</Text>
        <Text style={styles.calculateResultValue}>0</Text>
        <Text style={styles.calculateResultCategory}>0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 24,
    padding: 32,
    letterSpacing: 3,
    backgroundColor: '#2a1e5c',
  },


  buttonInnerText: {
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 16,
    letterSpacing: 3,
  },

  buttonTabs: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-evenly',
  },

  inputContent: {
    padding: 32,
    paddingTop: 0,
  },

  heightWeightTitle: {
    marginTop: 32,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },

  heightWeightTextInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 12,
    fontSize: 18,
    marginTop: 16,
    letterSpacing: 3,
  },

  calculateButtonContent: {
    paddingTop: 8,
    display: 'flex',
    flexDirection: 'row',
  },

  calculateButtonText: {
    backgroundColor: '#EC4269',
    padding: 16,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    width: 160,
    marginLeft: 32,
  },

  clearButtonText: {
    backgroundColor: '#2a1e5c',
    padding: 16,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    width: 105,
    marginLeft: 24,
    color: '#fff'
  },

  calculateResult: {
    height: '100%',
    padding: 32,
    paddingTop: 32,
  },

  calculateResultTitle: {
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 12
  },

  calculateResultValue: {
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  calculateResultCategory: {
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 16,
  },
});
