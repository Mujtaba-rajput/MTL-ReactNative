import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    height: '20%',
    backgroundColor: colors.black,
    paddingVertical: metrics.containerPadding * 0.4,
    paddingHorizontal: metrics.containerPadding * 0.4,
  },
});
