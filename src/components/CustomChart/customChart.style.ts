import {StyleSheet} from 'react-native';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    marginVertical: metrics.containerPadding * 0.4,
    borderRadius: metrics.borderRadius * 2,
  },
  custom: {
    borderRadius: metrics.borderRadius * 2,
  },
});
