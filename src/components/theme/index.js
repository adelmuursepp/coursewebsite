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
    text: '#3d405b',
    preFormattedText: '#1d3557',
    link: '#D1AC00',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#D1AC00',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#D1AC00',
  },
};

export { lightTheme, darkTheme };
