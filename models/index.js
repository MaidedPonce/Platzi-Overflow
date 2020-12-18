'use strict'

const firebase = require('firebase-admin')
const serviceAccount = require('../config/firebase.json')

let regularObj = {};
Object.assign(regularObj, serviceAccount);

firebase.initializeApp({
  credential: firebase.credential.cert(regularObj),
  databaseURL: 'https://platzioverflow-b068e.firebaseio.com/'
})

const db = firebase.database()
const Users = require('./users')
const Questions = require('./questions')

module.exports = {
  users: new Users(db),
  questions: new Questions(db)
}