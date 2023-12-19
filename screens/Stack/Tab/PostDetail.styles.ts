import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardContainer: {
    flex: 1,
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: '30%', 
    marginBottom: '30%', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },
  body: {
    fontSize: 18,
    fontWeight: '200',
    marginTop: 12,
    marginBottom: 25,
  },
  commentsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
  },
});
