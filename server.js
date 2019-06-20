'use strict';

const Q = require('@nmq/q/server');

Q.start();

const db = new Q('database');
db.monitorEvent('read');
db.monitorEvent('create');
db.monitorEvent('update');
db.monitorEvent('delete');
db.monitorEvent('error');
 
const files = new Q('files');
files.monitorEvent('save');
files.monitorEvent('error');
