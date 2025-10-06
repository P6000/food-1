import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet } from 'react-native';

interface Dish {
  id: string;
  name: string;
  category: 'Starter' | 'Main' | 'Dessert';
  price: number;
}

const HomeScreen: React.FC = ({ navigation }: any) => {
  const [dishes, setDishes] = useState<Dish[]>([
    { id: '1', name: 'Caesar Salad', category: 'Starter', price: 5.99 },
    { id: '2', name: 'Grilled Chicken', category: 'Main', price: 14.99 },
    { id: '3', name: 'Chocolate Cake', category: 'Dessert', price: 6.99 },
    { id: '4', name: 'Spring Rolls', category: 'Starter', price: 4.99 },
    { id: '5', name: 'Beef Steak', category: 'Main', price: 19.99 },
  ]);

  const [filteredDishes, setFilteredDishes] = useState<Dish[]>(dishes);

  const handleAddDish = (newDish: Dish) => {
    // Add new dish to both original and filtered lists
    setDishes((prevDishes) => {
      const updatedDishes = [...prevDishes, newDish];
      setFilteredDishes(updatedDishes); // Ensure filtered dishes list is updated as well
      return updatedDishes;
    });
  };

  const handleFilterDishes = (category: 'Starter' | 'Main' | 'Dessert' | 'All') => {
    if (category === 'All') {
      setFilteredDishes(dishes); // Show all dishes if 'All' is selected
    } else {
      setFilteredDishes(dishes.filter(dish => dish.category === category));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Text style={styles.text}>Total Dishes: {filteredDishes.length}</Text>

      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dishItem}>
            <Text>{item.name} - ${item.price}</Text>
          </View>
        )}
      />

      <View style={styles.buttonsContainer}>
        <Button
          title="Add Dish"
          onPress={() => navigation.navigate('AddDish', { onAddDish: handleAddDish })}
        />
        <Button
          title="Filter Menu"
          onPress={() => navigation.navigate('FilterMenu', { onFilterDishes: handleFilterDishes })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  dishItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
