import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
    // alignItems:'flex-start'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:20,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0178ff',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5
  },
  icon:{
      flexGrow:1,
      backgroundColor:'blue',
      alignSelf:'center',
      justifyContent:'center',
    }
});
