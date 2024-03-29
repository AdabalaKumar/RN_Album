// imoport libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// create a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
  return (
      <View style={viewStyle}>
           <Text style={textStyle} >{props.headerText}</Text>
      </View>
  );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, 
        elevation: 2,
        position: 'relative'
    },
   textStyle: {
       fontSize: 20
   }
};
//componenet avavilable to other parts of the app
export default Header;
