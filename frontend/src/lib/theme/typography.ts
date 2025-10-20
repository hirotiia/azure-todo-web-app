const typography = {
  // clampでレスポンシブな見出しスケール
  h1: {
    fontSize: 'clamp(2rem, 2vw + 1.2rem, 3rem)',
    fontWeight: 800,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: 'clamp(1.75rem, 1.6vw + 1rem, 2.5rem)',
    fontWeight: 800,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: 'clamp(1.5rem, 1.2vw + .9rem, 2rem)',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h4: { fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.3 },
  h5: { fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.35 },
  h6: { fontSize: '1rem', fontWeight: 700, lineHeight: 1.4 },

  body1: { fontSize: '1rem', lineHeight: 1.7 },
  body2: { fontSize: '.875rem', lineHeight: 1.7 },
  caption: { fontSize: '.75rem', lineHeight: 1.6 },

  button: { textTransform: 'none', fontWeight: 600 },
};

export default typography;
