import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: metrics.containerPadding * 0.5,
  },
  error: {
    color: colors.error,
    fontSize: fonts.size.xLarge,
  },
});
