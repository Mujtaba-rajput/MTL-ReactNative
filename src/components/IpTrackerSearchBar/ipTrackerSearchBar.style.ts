import {StyleSheet} from 'react-native';
import metrics from '../../utils/metrics';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    color: colors.white,
    paddingBottom: metrics.containerPadding * 0.5,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderTopLeftRadius: metrics.borderRadius,
    borderBottomLeftRadius: metrics.borderRadius,
    height: 40,
    paddingHorizontal: metrics.containerPadding * 0.4,
    backgroundColor: colors.white,
    color: colors.black,
  },
  button: {
    backgroundColor: colors.black,
    borderTopRightRadius: metrics.borderRadius,
    borderBottomRightRadius: metrics.borderRadius,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.containerPadding * 0.4,
  },
});
