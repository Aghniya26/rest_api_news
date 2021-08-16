'use strict';
const News = require('../model/news.model');
exports.findAll = function(req, res) {
News.findAll(function(err, news) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', news);
  res.send(news);
});
};
exports.create = function(req, res) {
const new_news = new News(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
News.create(new_news, function(err, news) {
  if (err)
  res.send(err);
  res.json({error:false,message:"News added successfully!",data:news});
});
}
};
exports.findById = function(req, res) {
News.findById(req.params.id, function(err, news) {
  if (err)
  res.send(err);
  res.json(news);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    News.update(req.params.id, new News(req.body), function(err, news) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'News successfully updated', data:news });
});
}
};
exports.delete = function(req, res) {
News.delete( req.params.id, function(err, news) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'News successfully deleted' });
});
};