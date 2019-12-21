/**
 * Example of tasks that change the environment variable
 */

import gulp from 'gulp';
import change from 'gulp-change'

const LOCAL_ENDPOINT = 'your_local_endpoint_url'
const LOCAL_ENV = 'local'
const DEV_ENDPOINT = 'your_dev_endpoint_url'
const DEV_ENV = 'dev'
const PRODUCTION_ENDPOINT = 'your_local_endpoint_url'
const PRODUCTION_ENV = 'production'

function setLocalEndpoint(content) {
  return content.replace(/REACT_APP_API_URL=.+/g, 'REACT_APP_API_URL='+LOCAL_ENDPOINT)
}

function setLocalEnvinroment(content) {
  return content.replace(/REACT_APP_ENV=.+/g, 'REACT_APP_ENV='+LOCAL_ENV)
}

function setDevEndpoint(content) {
  return content.replace(/REACT_APP_API_URL=.+/g, 'REACT_APP_API_URL='+DEV_ENDPOINT)
}

function setDevEnvinroment(content) {
  return content.replace(/REACT_APP_ENV=.+/g, 'REACT_APP_ENV='+DEV_ENV)
}

function setProductionEndpoint(content) {
  return content.replace(/REACT_APP_API_URL=.+/g, 'REACT_APP_API_URL='+PRODUCTION_ENDPOINT)
}

function setProductionEnvinroment(content) {
  return content.replace(/REACT_APP_ENV=.+/g, 'REACT_APP_ENV='+PRODUCTION_ENV)
}

gulp.task('env:local', function() {
  return  gulp.src('.env')
            .pipe(change(setLocalEnvinroment))
            .pipe(change(setLocalEndpoint))
            .pipe(gulp.dest('./'))
})

gulp.task('env:dev', function() {
  return  gulp.src('.env')
            .pipe(change(setDevEnvinroment))
            .pipe(change(setDevEndpoint))
            .pipe(gulp.dest('./'))
})

gulp.task('env:production', function() {
  return  gulp.src('.env')
            .pipe(change(setProductionEnvinroment))
            .pipe(change(setProductionEndpoint))
            .pipe(gulp.dest('./'))``
})