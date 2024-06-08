import {StyleSheet} from 'react-native';
import font from '../../utils/fonts';
import colors from '../../utils/colors';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    width: metrics.screenHeight * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.activeColor,
    borderRadius: 8,
    marginTop: 20,
    height: 48,
  },
  label: {
    color: colors.primaryColor,
    fontSize: font.size.medium,
    fontWeight: '700',
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 20,
    resizeMode: 'contain',
  },
});
