const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#000',
    text: '#1d3557',
    preFormattedText: '#1d3557',
    link: '#a8dadc',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#a8dadc',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#a8dadc',
  },
};

export { lightTheme, darkTheme };
