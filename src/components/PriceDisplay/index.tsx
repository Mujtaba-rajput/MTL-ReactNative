import React from 'react';
import {View, Text} from 'react-native';
import styles from './priceDisplay.style';

interface PriceDisplayProps {
  price: number | null;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({price}) => {
  return (
    <View style={styles.row}>
      <Text style={styles.priceText}>BTCUSDT Price:</Text>
      <Text style={styles.price}>{price ? `$${price}` : 'Loading...'}</Text>
    </View>
  );
};

export default PriceDisplay;
