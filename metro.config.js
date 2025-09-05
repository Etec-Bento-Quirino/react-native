const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Configurações personalizadas para o curso
config.resolver.assetExts.push(
  // Adicionar extensões de arquivo se necessário
  'db',
  'mp3',
  'ttf',
  'obj',
  'png',
  'jpg'
);

config.resolver.sourceExts.push(
  // Adicionar extensões de código se necessário
  'jsx',
  'tsx',
  'ts'
);

// Configurações de transformação
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true
  }
};

module.exports = config;
