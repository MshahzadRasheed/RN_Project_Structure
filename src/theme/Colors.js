import {Platform} from 'react-native';

const white = '#FFFFFF';
const black = '#000000';
const black1 = '#323a45';
const grey = '#707070';
const grey1 = '#707070';
const grey2 = '#aaaaaa';
const grey3 = '#D5D8DB';
const grey4 = '#8a959e';
const grey5 = '#4e4e4e';
const grey6 = '#f6f6f6';
const gray7 = '#999999';
const gary9 = '#e9e9e9';
const gray10 = '#efeff4';
const gray11 = '#c8c8c8';
const gray12 = '#818181';
const lightGray = '#f2f2f2';
const graybrown = '#444444';
const gray8 = '#f2f2f2';
const yellow = '#ffc415';
const green1 = '#32ccb0';
const green2 = '#5cba47';
const orange1 = '#fdb918';
const orange2 = '#ff3d2e';

const iceblue = '#f5f8ff';

const transparent = 'rgba(0,0,0,0)';
const red = '#f94242';
const red2 = '#f41729';
const blue = '#4965b3';
const blue1 = '#161b54';
const blue2 = '#5c6d96';
const blue3 = '#4965b3';
const linkBlue = '#007bff';
const lightblue = '#8092bc';
const green = '#32b34a';
const silver = '#dfdfe0';
const silver1 = '#d1d1d6';
const primary = white;
const secondary = white;
const tertiary = black;
const quaternary = grey;

const background = {
  primary,
  secondary: '#f2f2f2',
  tertiary: '#00000057',
};

const text = {
  primary: '#212121',
  secondary: '#bcbcbc',
  tertiary: primary,
  quaternary: '#707070',
  accent: '#ff2824',
};

const presetColors = {
  primary: ['#febb5b', '#f24645'],
  secondary: ['#f24645', '#febb5b'],
  instagram: [
    'rgb(106, 57, 171)',
    'rgb(151, 52, 160)',
    'rgb(197, 57, 92)',
    'rgb(231, 166, 73)',
    'rgb(181, 70, 92)',
  ],
  firefox: [
    'rgb(236, 190, 55)',
    'rgb(215, 110, 51)',
    'rgb(181, 63, 49)',
    'rgb(192, 71, 45)',
  ],
  sunrise: [
    'rgb(92, 160, 186)',
    'rgb(106, 166, 186)',
    'rgb(142, 191, 186)',
    'rgb(172, 211, 186)',
    'rgb(239, 235, 186)',
    'rgb(212, 222, 206)',
    'rgb(187, 216, 200)',
    'rgb(152, 197, 190)',
    'rgb(100, 173, 186)',
  ],
};

const navbar = {
  background: background.primary,
  text: text.primary,
};
const dateColors = [
  red,
  blue1,
  yellow,
  orange2,
  blue,
  green1,
  blue,
  blue1,
  yellow,
  green,
  orange2,
  blue,
  green1,
  orange1,
  green1,
  orange1,
  blue,
  graybrown,
  green1,
  green,
  blue1,
  graybrown,
  graybrown,
  blue1,
  linkBlue,
  yellow,
  green,
  blue1,
  red,
  red2,
  yellow,
  blue,
  orange1,
  green,
  yellow,
  lightblue,
  iceblue,
];
const border = '#f2f2f2';
const separator = '#f2f2f2';

const windowTint = 'rgba(0, 0, 0, 0.4)';
const windowTintWhite = 'rgba(255, 255, 255, 0.1)';

const colorsArray1 = [green1, green2, orange1, orange2];

export default {
  white,
  black,
  black1,
  grey,
  grey1,
  grey2,
  grey3,
  grey4,
  grey5,
  grey6,
  gray7,
  gray8,
  yellow,
  gary9,
  gray10,
  gray11,
  gray12,
  transparent,
  red,
  blue,
  blue1,
  blue2,
  blue3,
  green,
  silver,
  silver1,
  primary,
  secondary,
  tertiary,
  quaternary,
  lightGray,
  graybrown,
  green1,
  green2,
  orange1,
  orange2,

  background,
  navbar,
  text,
  presetColors,
  border,
  separator,
  windowTint,
  windowTintWhite,

  twitter: '#41abe1',
  google: '#e94335',
  facebook: '#3b5998',

  info: '#19bfe5',
  warning: '#feb401',
  danger: '#ed1c4d',
  success: '#b76c94',
  dateColors,
  colorsArray1,
};
