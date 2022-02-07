module.exports = function(api) {
  api.cache(true);

  const targets  = {node: 'current'};
  const presets = ['@babel/preset-env'];
  const plugins = [];

  return {
    targets,
    presets,
    plugins,
  };
};
