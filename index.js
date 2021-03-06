const foregroundColor = '#fff';
const backgroundColor = '#1b2b34';
const cursorColor = foregroundColor;
const borderColor = backgroundColor;
const colors = [
  backgroundColor,
  "#ec5f67",
  "#99c794",
  "#fac863",
  "#6699cc",
  "#c594c5",
  "#5fb3b3",
  foregroundColor,
  "#65737e",
  "#ec5f67",
  "#99c794",
  "#fac863",
  "#6699cc",
  "#c594c5",
  "#5fb3b3",
  foregroundColor
];

exports.decorateConfig = config => Object.assign(config, {
  foregroundColor,
  backgroundColor,
  cursorColor,
  borderColor,
  colors
});
