import { Logger, Level, ContextLogger } from 'reactivedb/shared'

const envify = () => {
  const env = (process && process.env && process.env.NODE_ENV) || 'production'
  switch (env) {
    case 'production':
      return Level.error
    case 'development':
      return Level.debug
    default:
      return Level.error
  }
}

export const SDKLogger: ContextLogger = Logger.get('teambition-sdk', (name, _, message) => {
  return `${name}: at ${new Date().toLocaleString()} \r\n    ` + message
})

SDKLogger.setLevel(envify())
