import React from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';
import styles from './imageDisplay.style';

interface ImageDisplayProps {
  imageSource: ImageSourcePropType;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({imageSource}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

export default ImageDisplay;
