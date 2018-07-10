'use strict';

var DB = new MySQL();
DB.query('create database node_base', function (error, results, fields) {
  if (error) throw error;
  console.log('node_base schema has been created');
});