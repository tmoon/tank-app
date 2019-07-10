import EStyleSheet from 'react-native-extended-stylesheet';

const RobotoFont = EStyleSheet.create({
  thin: {
    // unused
    '@media android': { fontFamily: 'roboto-thin-webfont' },
    '@media ios': { fontFamily: 'Roboto', fontWeight: '100' },
  },
  light: {
    '@media android': { fontFamily: 'roboto-light-webfont' },
    '@media ios': { fontFamily: 'Roboto', fontWeight: '300' },
  },
  regular: {
    '@media android': { fontFamily: 'roboto-regular-webfont' },
    '@media ios': { fontFamily: 'Roboto', fontWeight: '400' },
  },
  medium: {
    '@media android': { fontFamily: 'roboto-medium-webfont' },
    '@media ios': { fontFamily: 'Roboto', fontWeight: '500' },
  },
  bold: {
    // unused
    '@media android': { fontFamily: 'roboto-bold-webfont' },
    '@media ios': { fontFamily: 'Roboto', fontWeight: '700' },
  },
  black: {
    // unused
    '@media android': { fontFamily: 'roboto-black-webfont' },
    '@media ios': { fontFamily: 'Roboto', fontWeight: '900' },
  },
});

export default { RobotoFont };
