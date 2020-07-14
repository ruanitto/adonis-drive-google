# @ruanitto/adonis-drive-google 💾 

Google Cloud Storage driver for AdonisJS Drive

# Requirements
- [AdonisJS Drive](https://github.com/adonisjs/adonis-drive) (`adonis install @adonisjs/drive`)

# Installation
```
adonis install @ruanitto/adonis-drive-google
```

# Instructions
Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
  ...
  '@ruanitto/adonis-drive-google/providers/DriveProvider'
]
```

Add new configuration inside `disks` module in `config/drive.js`:

```js
gcs: {
  driver: 'gcs',
  keyFilename: Env.get('GCS_KEY_FILE_NAME'), // path to json file
  bucket: Env.get('GCS_BUCKET')
}
```

Add google cloud storage variables in `.env`:
```
GCS_KEY_FILE_NAME=
GCS_BUCKET=
```

# Examples
## Find if a file exists or not.

```js
const isExists = await Drive.disk('gcs').exists('adonis.jpeg')
```

## Change bucket
You can change bucket at runtime, just passing the bucket name before action.

```js
const isExists = await Drive.disk('minio').bucket('new-bucket').exists('adonis.jpeg')
```

Complete example please go to [this link](examples/routes.js)

# Thanks
Special thanks to the creator(s) of [AdonisJS](http://adonisjs.com/) for creating such a great framework.