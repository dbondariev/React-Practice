export const presets = [
  ['@babel/preset-env', { targets: '> 1%', useBuiltIns: 'usage', corejs: 3 }],
  '@babel/preset-react',
];
export const plugins = ['@babel/plugin-proposal-class-properties'];
