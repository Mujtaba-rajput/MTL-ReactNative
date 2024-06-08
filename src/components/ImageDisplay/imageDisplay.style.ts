import {StyleSheet} from 'react-native';
import metrics from '../../utils/metrics';

export default StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: metrics.containerPadding,
  },
  image: {
    width: '80%',
    height: 200,
    marginTop: metrics.containerPadding,
    borderRadius: metrics.borderRadius,
  },
});
