// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: 'POPmenu',

  // Default port that prototype runs on
  port: '8080',

  // Enable or disable password protection on production
  useAuth: 'false',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Force HTTP to redirect to HTTPs on production
  useHttps: 'true',

  // Enable or disable Browser Sync
  useBrowserSync: 'true'

}
