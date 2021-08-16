'use strict';
var dbConn = require('./../../config/db.config');
//News object create
var News = function(news){
  this.title_news=news.title_news;
  this.media_name=news.media_name;
  this.date=news.date;
  this.content=news.content;
  this.link_image=news.link_image;
  this.created_at=new Date();
  this.updated_at=new Date();
};

News.create = function (nNews, result) {
dbConn.query("INSERT INTO news set ?", nNews, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};

News.findById = function (id, result) {
dbConn.query("SELECT * FROM news WHERE id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
News.findAll = function (result) {
dbConn.query("SELECT * FROM news", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('news : ', res);
  result(null, res);
}
});
};
News.update = function(id, news, result){
dbConn.query("UPDATE news SET title_news=?,media_name=?,date=?,content=?,link_image=? WHERE id = ?", [news.title_news,news.media_name,news.date,news.content,news.link_image, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
News.delete = function(id, result){
dbConn.query("DELETE FROM news WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= News;