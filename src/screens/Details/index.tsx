import React from 'react';
import {View} from 'react-native';
import {useAppSelector} from '../../hooks/redux';
import {IPDetails, ImageDisplay} from '../../components';
import styles from './details.style';

const Details = () => {
  const {ipData, selectedImage} = useAppSelector(state => state.dashboard);
  return (
    <View style={styles.container}>
      {selectedImage && <ImageDisplay imageSource={selectedImage} />}
      {ipData && (
        <View style={styles.detailsContainer}>
          <IPDetails ipData={ipData} />
        </View>
      )}
    </View>
  );
};

export default Details;
