import 'react-native-gesture-handler/jestSetup';

// Mock do AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// Mock do React Native Maps
jest.mock('react-native-maps', () => {
  const React = require('react');
  const { View } = require('react-native');
  
  const MockMapView = (props) => React.createElement(View, props);
  const MockMarker = (props) => React.createElement(View, props);
  
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
    PROVIDER_GOOGLE: 'google',
    PROVIDER_DEFAULT: 'default'
  };
});

// Mock do Expo Location
jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn(() => 
    Promise.resolve({ status: 'granted' })
  ),
  getCurrentPositionAsync: jest.fn(() =>
    Promise.resolve({
      coords: {
        latitude: -23.5505,
        longitude: -46.6333,
        accuracy: 10
      }
    })
  ),
  reverseGeocodeAsync: jest.fn(() =>
    Promise.resolve([
      {
        street: 'Rua das Flores',
        city: 'São Paulo',
        region: 'SP',
        country: 'Brasil'
      }
    ])
  )
}));

// Mock do React Navigation
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
      reset: jest.fn()
    }),
    useRoute: () => ({
      params: {}
    })
  };
});

// Mock do Redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => jest.fn())
}));

// Mock do Expo
jest.mock('expo', () => ({
  ...jest.requireActual('expo'),
  Linking: {
    openURL: jest.fn(() => Promise.resolve())
  },
  Alert: {
    alert: jest.fn()
  }
}));

// Mock do React Native WebView
jest.mock('react-native-webview', () => {
  const React = require('react');
  const { View } = require('react-native');
  
  return {
    __esModule: true,
    default: (props) => React.createElement(View, props)
  };
});

// Configurações globais
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn()
};

// Mock de timers
jest.useFakeTimers();
