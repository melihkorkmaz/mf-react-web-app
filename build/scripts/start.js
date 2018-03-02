const logger = require('../lib/logger')

logger.info('Starting server...')
require('../../server/main').listen(8102, () => {
  logger.success('Server is running at http://localhost:8102')
})
