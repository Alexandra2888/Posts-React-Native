import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10, // Add border radius for a modern look
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3, // Add elevation for a shadow effect on Android
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
