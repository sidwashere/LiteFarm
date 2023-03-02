module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-runtime',
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process');
          },
        },
      };
    },
  ],
};
