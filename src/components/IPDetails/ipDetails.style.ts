import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: fonts.size.small,
    color: colors.white,
  },
  fieldsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
});
