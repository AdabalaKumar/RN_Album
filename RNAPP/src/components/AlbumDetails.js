import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ Item }) => {
    const { title, artist, thumbnail_image, image, url } = Item;
    // eslint-disable-next-line max-len
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles;
  return (
      <Card>
          <CardSection>
              <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
              </View>
              <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text style={headerTextStyle}>{artist}</Text>
          </View>
          </CardSection>

          <CardSection>
              <Image style={imageStyle} source={{ uri: image }} />
          </CardSection>

          <CardSection>
              <Button onPress={() => Linking.openURL(url)} >Buy Now</Button>
          </CardSection>
              
      </Card>
  );
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 200,
        flex: 1,
        width: null
    }

};
export default AlbumDetails;
