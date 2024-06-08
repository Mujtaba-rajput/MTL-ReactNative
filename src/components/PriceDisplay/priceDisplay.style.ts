import {StyleSheet} from 'react-native';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  priceText: {
    fontSize: fonts.size.xLarge,
    color: colors.black,
  },
  price: {
    color: colors.price,
    fontSize: fonts.size.xLarge,
  },
});
