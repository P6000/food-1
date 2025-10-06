import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Define the dish categories
type Category = 'Starter' | 'Main' | 'Dessert';

interface Dish {
  id: string;
  name: string;
  category: Category;
  price: number;
}

// Simple way to generate a new unique ID
const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

const AddDishScreen: React.FC = ({ navigation, route }: any) => {
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<Category>('Starter');
  const [price, setPrice] = useState<string>('');

  const handleAddDish = () => {
    if (!name || !price || isNaN(Number(price)) || Number(price) <= 0) {
      Alert.alert('Error', 'Please fill all fields correctly.');
      return;
    }

    const newDish: Dish = {
      id: generateId(),
      name,
      category,
      price: parseFloat(price),
    };

    // Call the onAddDish function passed via navigation params
    route.params.onAddDish(newDish);

    // Navigate back to HomeScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Dish</Text>

      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter dish name"
      />

      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue as Category)}
        style={styles.input}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />

      <Button title="Add Dish" onPress={handleAddDish} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
});

export default AddDishScreen;












/*

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Define the dish categories
type Category = 'Starter' | 'Main' | 'Dessert';

interface Dish {
  id: string;
  name: string;
  category: Category;
  price: number;
}

// Simple way to generate a new unique ID
const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

const AddDishScreen: React.FC = ({ navigation }: any) => {
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<Category>('Starter');
  const [price, setPrice] = useState<string>('');

  const handleAddDish = () => {
    if (!name || !price || isNaN(Number(price)) || Number(price) <= 0) {
      Alert.alert('Error', 'Please fill all fields correctly.');
      return;
    }

    const newDish: Dish = {
      id: generateId(),
      name,
      category,
      price: parseFloat(price),
    };

    // Ideally, here you would save the new dish to a database or state management
    // For now, let's just log the new dish
    console.log('New Dish Added:', newDish);

    // Navigate back to HomeScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Dish</Text>

      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter dish name"
      />

      <Text style={styles.label}>Category</Text>
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue as Category)}
        style={styles.input}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Enter price"
        keyboardType="numeric"
      />

      <Button title="Add Dish" onPress={handleAddDish} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
});

export default AddDishScreen;
*/