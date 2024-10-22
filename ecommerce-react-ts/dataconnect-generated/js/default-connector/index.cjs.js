const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ecommerce-react-ts',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

