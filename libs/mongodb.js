'use strict';
/**
 * node-mongodbのドキュメント
 * http://mongodb.github.io/node-mongodb-native/2.1/
 */
var db;
var MongoClient = require( 'mongodb' ).MongoClient;
var assert = require( 'assert' );
var conf = require('config');

// Connection URL
var url = 'mongodb://' + conf.mongodb.server + ':' + conf.mongodb.port + '/' + conf.mongodb.dbname;

// Use connect method to connect to the Server
MongoClient.connect( url, function ( err, mongodb ) {
    assert.equal( null, err );
    console.log( "Connected server : " + url);
    db = mongodb;
} );

/**
 * @param collection_name コレクション名
 * @param {json} criteria 検索条件
 * @param {json} projection 項目指定
 * @param {json} order ソート条件指定
 * @param callback コールバック関数
 * http://docs.mongodb.org/manual/reference/method/db.collection.find/
 */
function find( collection_name, criteria, projection, order, callback ) {
    db.collection( collection_name, function ( outer_error, collection ) {
        collection.find( criteria, projection ).sort( order ).toArray( function ( inner_error, list ) {
            callback( list );
        } );
    } );
}

/**
 * @param collection_name コレクション名
 * @param {json} document 挿入ドキュメント
 * @param callback コールバック関数
 * http://docs.mongodb.org/manual/reference/method/db.collection.insert/
 */
function insert( collection_name, document, options, callback ) {
    db.collection( collection_name, function ( outer_error, collection ) {
        collection.insert( document, options, function ( inner_error, result ) {
            callback( result );
        } );
    } );
}

/**
 * @param collection_name コレクション名
 * @param {json} query 更新条件
 * @param {json} update_content 更新内容
 * @param {json} options オプション
 * @param callback コールバック関数
 * http://docs.mongodb.org/manual/reference/method/db.collection.update/
 */
function update( collection_name, query, update_content, options, callback ) {
    db.collection( collection_name, function ( outer_error, collection ) {
        collection.update( query, update_content, options, function ( inner_error, result ) {
            callback( result );
        } );
    } );
}

/**
 * @param collection_name コレクション名
 * @param {json} query 削除条件
 * @param {boolean} justOne
 * @param callback コールバック関数
 * http://docs.mongodb.org/manual/reference/method/db.collection.remove/
 */
function remove( collection_name, query, options, callback ) {
    db.collection( collection_name, function ( outer_error, collection ) {
        collection.remove( query, options, function ( inner_error, result ) {
            callback( result );
        } );
    } );
}

/**
 * @param val キー変換
 * http://docs.mongodb.org/manual/reference/method/db.collection.remove/
 */
function ObjectID( val ) {
  return require( 'mongodb' ).ObjectID(val);
}

module.exports = {
  find: find,
  insert: insert,
  update: update,
  remove: remove,
  ObjectID: ObjectID
};