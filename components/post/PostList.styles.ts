import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 10,
    color: 'black',
    opacity: 0.7,
  },
});
