import React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './imageCarousel.style';
import metrics from '../../utils/metrics';

interface ImageCarouselProps {
  images: {uri: string}[];
  renderItem: ({item}: {item: {uri: string}}) => JSX.Element;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({images, renderItem}) => {
  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        layout={'default'}
        sliderWidth={metrics.screenWidth}
        itemWidth={metrics.screenWidth * 0.7}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={1}
        containerCustomStyle={styles.custom}
        contentContainerCustomStyle={styles.content}
        loop
      />
    </View>
  );
};

export default ImageCarousel;
