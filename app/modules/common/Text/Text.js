import React from 'react';
import { Text } from 'react-native';
import RobotoFont from '../../../config/styles/common-styles';
import $$ from './styles';

const fonts = {
  en: RobotoFont,
};

const getFont = weight => fonts.en[weight];

const H1 = ({ children, style, ...restProps }) => (
  <Text style={[$$.h1, getFont('light'), style]} {...restProps}>
    {children}
  </Text>
);
const H2 = ({ children, style, ...restProps }) => (
  <Text style={[$$.h2, getFont('light'), style]} {...restProps}>
    {children}
  </Text>
);
const H3 = ({ children, style, ...restProps }) => (
  <Text style={[$$.h3, getFont('regular'), style]} {...restProps}>
    {children}
  </Text>
);
const H4 = ({ children, style, ...restProps }) => (
  <Text style={[$$.h4, getFont('regular'), style]} {...restProps}>
    {children}
  </Text>
);
const H5 = ({ children, style, ...restProps }) => (
  <Text style={[$$.h5, getFont('regular'), style]} {...restProps}>
    {children}
  </Text>
);
const H6 = ({ children, style, ...restProps }) => (
  <Text style={[$$.h6, getFont('medium'), style]} {...restProps}>
    {children}
  </Text>
);

const Body1 = ({ children, style, ...restProps }) => (
  <Text style={[$$.body1, getFont('regular'), style]} {...restProps}>
    {children}
  </Text>
);
const Body2 = ({ children, style, ...restProps }) => (
  <Text style={[$$.body2, getFont('regular'), style]} {...restProps}>
    {children}
  </Text>
);

const Subtitle1 = ({ children, style, ...restProps }) => (
  <Text style={[$$.subtitle1, getFont('regular'), style]} {...restProps}>
    {children}
  </Text>
);
const Subtitle2 = ({ children, style, ...restProps }) => (
  <Text style={[$$.subtitle2, getFont('medium'), style]} {...restProps}>
    {children}
  </Text>
);

const Button = ({ children, style, ...restProps }) => (
  <Text style={[$$.button, getFont('medium'), style]} {...restProps}>
    {children}
  </Text>
);
const Caption = ({ children, style, ...restProps }) => (
  <Text style={[$$.caption, getFont('medium'), style]} {...restProps}>
    {children}
  </Text>
);
const Overline = ({ children, style, ...restProps }) => (
  <Text style={[$$.overline, getFont('medium'), style]} {...restProps}>
    {children}
  </Text>
);

const Native = ({ children, style, ...restProps }) => (
  <Text style={[getFont('regular'), style]} {...restProps}>
    {children}
  </Text>
);

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body1,
  Body2,
  Subtitle1,
  Subtitle2,
  Button,
  Caption,
  Overline,
  Native,
};
