import Dimensions from 'Dimensions';

const x = Dimensions.get('window').width,
  y = Dimensions.get('window').height;
const ratioX = x <= 320 ? 0.75 : x < 1024 ? 0.875 : 1.25;

const base_unit = 16,
  unit = base_unit * ratioX;
const em = (value) => {
  return unit * value;
};

const GlobalStyles = {
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  PADDING: em(1), // 12
};

export default GlobalStyles;
