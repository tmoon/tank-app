import GlobalStyles from '../../config/styles';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $appBackgroundColor: 'white',
  $textInputHeight: 60,
  $disabledSurface: 'rgba(250, 250, 250, 100)',

  $darkText87HighEmphasis: 'rgba(0, 0, 0, 0.871)',
  $darkText60MediumEmphasis: 'rgba(0, 0, 0, 0.6)',
  $darkText54Inactive: 'rgba(0, 0, 0, 0.54)',
  $darkDivider: 'rgba(0, 0, 0, 0.122)',

  $whiteText87HighEmphasis: 'rgba(255, 255, 255, 0.871)',
  $whiteText60MediumEmphasis: 'rgba(255, 255, 255, 0.6)',
  $whiteText38Disabled: 'rgba(255, 255, 255, 0.38)',
  $whiteDivider: 'rgba(255, 255, 255, 0.122)',

  /* Primary Colors */
  $primary: 'rgb(0, 171, 192)',
  $primary50: 'rgb(224, 247, 250)',
  $primary100: 'rgb(178, 235, 242)',
  $primary200: 'rgb(128, 221, 233)',
  $primary300: 'rgb(77, 207, 224)',
  $primary400: 'rgb(38, 197, 217)',
  $primary500: 'rgb(0, 187, 211)',
  $primary600: 'rgb(0, 171, 192)',
  $primary700: 'rgb(0, 150, 166)',
  $primary800: 'rgb(0, 130, 142)',
  $primary900: 'rgb(0, 95, 99)',
  $blackTextOnPrimaryHigh: 'rgba(0, 0, 0, 0.871)',
  $blackTextOnPrimaryMedium: 'rgba(0, 0, 0, 0.659)',
  $blackTextOnPrimaryDisabled: 'rgba(0, 0, 0, 0.38)',

  /* Secondary Colors */
  $secondary: 'rgb(255, 201, 41)',
  $secondary50: 'rgb(255, 248, 225)',
  $secondary100: 'rgb(255, 236, 179)',
  $secondary200: 'rgb(255, 223, 130)',
  $secondary300: 'rgb(255, 212, 79)',
  $secondary400: 'rgb(255, 201, 41)',
  $secondary500: 'rgb(255, 192, 11)',
  $secondary600: 'rgb(255, 178, 4)',
  $secondary700: 'rgb(255, 159, 4)',
  $secondary800: 'rgb(255, 142, 4)',
  $secondary900: 'rgb(254, 110, 4)',
  $blackTextOnSecondaryHigh: 'rgba(0, 0, 0, 0.871)',
  $blackTextOnSecondaryMedium: 'rgba(0, 0, 0, 0.659)',
  $blackTextOnSecondaryDisabled: 'rgba(0, 0, 0, 0.38)',

  /* Primary + Secondary BLACK TEXT Colors */
  $blackTextHigh: 'rgba(0, 0, 0, 0.871)',
  $blackTextMedium: 'rgba(0, 0, 0, 0.6)',
  $blackTextDisabled: 'rgba(0, 0, 0, 0.38)',

  /* Primary + Secondary WHITE TEXT Colors */
  $whiteTextHigh: 'rgba(255, 255, 255, 0.871)',
  $whiteTextMedium: 'rgba(255, 255, 255, 0.6)',
  $whiteTextDisabled: 'rgba(255, 255, 255, 0.38)',

  $surfaceColorLight: 'rgb(255, 255, 255)',
  $surfaceColorDark: 'rgb(245, 245, 245)',

  $accent1: 'rgb(242,113,35)',
  $accent1_30: 'rgb(79, 92, 160)',
  $accent1_70: 'rgba(92, 107, 191, .07)',
  $accent2: 'rgb(235, 64, 122)',

  $orange: 'rgba(247, 153, 89, 100)',
  $border8: 'rgba(0, 0, 0, .08)',
  $border2: 'rgba(0, 0, 0, .2)',
  $error: 'rgb(228, 66, 86)',

  $pinky: '#EA426D',
  $prupleGray: '#E9EDFF',
  $await: '#F79859',
  $info: '#E9427B',
  $infoBlue: '#29AAE1',
  $infoLightBlue: '#E9EDFF',
  $success: '#5CBD84',
  $reject: '#E54256',
  $processing: '#5CCAEF',
  $grayHeader: '#979797',
  $facebook: '#4A68B7',

  $globalPadding: GlobalStyles.PADDING,
});

/* module.hot.accept(() => {
	EStyleSheet.clearCache();
	EStyleSheet.build();
}); */
export default EStyleSheet;
