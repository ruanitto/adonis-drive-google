'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const GoogleCloudStorage = require('../src/Drivers')

class DriveProvider extends ServiceProvider {
  register() {
    this.app.extend('Adonis/Addons/Drive', 'gcs', (app) => {
      return GoogleCloudStorage
    })
  }
}

module.exports = DriveProvider
