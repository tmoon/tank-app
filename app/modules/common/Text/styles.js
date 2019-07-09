import EStyleSheet from 'react-native-extended-stylesheet';
import { moderateScale } from 'react-native-size-matters';

export default EStyleSheet.create({
  h1: {
    fontSize: moderateScale(96, 0.3),
    letterSpacing: -1.5,
    lineHeight: 112,
    color: '$darkText87HighEmphasis',
  },
  h2: {
    fontSize: moderateScale(60, 0.3),
    letterSpacing: -0.5,
    lineHeight: 71,
    color: '$darkText87HighEmphasis',
  },
  h3: {
    fontSize: moderateScale(48, 0.3),
    letterSpacing: 0,
    lineHeight: 60,
    color: '$darkText87HighEmphasis',
  },
  h4: {
    fontSize: moderateScale(34, 0.3),
    letterSpacing: 0.25,
    lineHeight: 44,
    color: '$darkText87HighEmphasis',
  },
  h5: {
    fontSize: moderateScale(24, 0.3),
    letterSpacing: 0,
    lineHeight: 28,
    color: '$darkText87HighEmphasis',
  },
  h6: {
    fontSize: moderateScale(20, 0.3),
    letterSpacing: 0.25,
    lineHeight: 26,
    color: '$darkText87HighEmphasis',
  },
  body1: {
    fontSize: moderateScale(16, 0.3),
    letterSpacing: 0.5,
    lineHeight: 28,
    color: '$darkText87HighEmphasis',
  },
  body2: {
    fontSize: moderateScale(14, 0.3),
    letterSpacing: 0.24,
    lineHeight: 20,
    color: '$darkText87HighEmphasis',
  },
  subtitle1: {
    fontSize: moderateScale(16, 0.3),
    letterSpacing: 0.15,
    lineHeight: 24,
    color: '$darkText87HighEmphasis',
  },
  subtitle2: {
    fontSize: moderateScale(14, 0.3),
    letterSpacing: 0.1,
    lineHeight: 24,
    color: '$darkText87HighEmphasis',
  },
  button: {
    fontSize: moderateScale(14, 0.3),
    letterSpacing: 1.25,
    lineHeight: 16,
    color: '$darkText87HighEmphasis',
  },
  caption: {
    fontSize: moderateScale(12, 0.3),
    letterSpacing: 0.4,
    lineHeight: 16,
    color: '#919191',
  },
  overline: {
    fontSize: moderateScale(12, 0.3),
    letterSpacing: 0,
    lineHeight: 16,
    color: '$darkText87HighEmphasis',
  },
});
