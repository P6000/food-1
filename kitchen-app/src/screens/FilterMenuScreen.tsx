import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type Category = 'Starter' | 'Main' | 'Dessert';

const FilterMenuScreen: React.FC = ({ navigation, route }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Starter');

  const handleApplyFilter = () => {
    // Apply the selected filter and pass it back to HomeScreen
    route.params.onFilterDishes(selectedCategory);
    navigation.goBack(); // Go back to HomeScreen after applying filter
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Dishes by Category</Text>

      <Text style={styles.label}>Select Category</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue as Category)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starter" />
        <Picker.Item label="Mains" value="Main" />
        <Picker.Item label="Desserts" value="Dessert" />
      </Picker>

      <Button title="Apply Filter" onPress={handleApplyFilter} />
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
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default FilterMenuScreen;
