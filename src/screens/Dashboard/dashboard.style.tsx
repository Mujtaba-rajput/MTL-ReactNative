import {StyleSheet} from 'react-native';
import metrics from '../../utils/metrics';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    height: '25%',
    backgroundColor: colors.black,
    paddingVertical: metrics.containerPadding * 0.4,
    paddingHorizontal: metrics.containerPadding * 0.4,
  },
  image: {
    width: '65%',
    height: 250,
    borderRadius: metrics.borderRadius,
    alignSelf: 'center',
  },
});
