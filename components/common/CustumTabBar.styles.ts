import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      elevation: 0,
      marginBottom: 10,
      width: '80%',
      marginLeft: '10%',
    },
    tabBarBase: {
      justifyContent: 'space-around',
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius: 60,
      backgroundColor: 'black',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    focusedBg: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 40,
    },
    nonFocusedBg: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 360,
    },
    focusedTxt: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
      paddingHorizontal: 20,
    },
    nonFocusedTxt: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      paddingHorizontal: 20,
    },
  });
  