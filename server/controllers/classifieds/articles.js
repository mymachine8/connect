'use strict';

/**
 * Module dependencies.
 */

const mongoose = require('mongoose');
const assign = require('object-assign');
const wrap = require('co-express');
const only = require('only');
const Article = mongoose.model('Article');

/**
 * Load
 */

exports.load = function (req, res, next, id) {
  req.article = yield Article.load(id);
  if (!req.article) return next(new Error('Article not found'));
  next();
};

/**
 * Create an article
 * Upload an image
 */

exports.create = function(req, res) {
  const article = new Article(only(req.body, 'title body tags'));
  const images = req.files.image
    ? [req.files.image]
    : undefined;

  article.user = req.user;
  yield article.uploadAndSave(images);
};

/**
 * Edit an article
 */

exports.edit = function (req, res) {
  res.render('articles/edit', {
    title: 'Edit ' + req.article.title,
    article: req.article
  });
};

/**
 * Update article
 */

exports.update = wrap(function* (req, res){
  const article = req.article;
  const images = req.files.image
    ? [req.files.image]
    : undefined;

  assign(article, only(req.body, 'title body tags'));
  yield article.uploadAndSave(images);
  res.redirect('/articles/' + article._id);
});

/**
 * Show
 */

exports.show = function (req, res){
  res.render('articles/show', {
    title: req.article.title,
    article: req.article
  });
};

/**
 * Delete an article
 */

exports.destroy = wrap(function* (req, res) {
  yield req.article.remove();
  req.flash('success', 'Deleted successfully');
  res.redirect('/articles');
});
