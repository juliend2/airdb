<?php
if (isset($_COOKIE['success'])) {
  $success = $_COOKIE['success'];
  unset($_COOKIE['success']);
}
if (isset($_COOKIE['failure'])) {
  $failure = $_COOKIE['failure'];
  unset($_COOKIE['failure']);
}
if (isset($_COOKIE['REAL_REFERER'])) {
  $referer = $_COOKIE['REAL_REFERER'];
  unset($_COOKIE['REAL_REFERER']);
}
?>
<!DOCTYPE html>
<!--[if IE 8]> <html class="no-js lt-ie9" xmlns:fb="http://ogp.me/ns/fb#" xml:lang="fr-CA" lang="fr-CA" > <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" xmlns:fb="http://ogp.me/ns/fb#" lang="fr-CA" >
<!--<![endif]-->
<head class="">
  <meta charset="utf-8" />
  <title>Perso data</title>
  <link rel="stylesheet" href="/assets/dist/css/main.bundle.css"/>
  <script src="/assets/dist/js/jquery-3.2.1.min.js"></script>
  <script src="/assets/dist/js/mousetrap.min.js"></script>
  <script src="/assets/dist/js/bundle.js"></script>
</head>
<body>
<nav>
  <ul class="nav">
    <li><a href="/?action=tables">List Tables & views</a>
    <li><a href="/?action=create_table">Create a Table</a>
    <li><a href="/?action=create_view">Create a View</a>
    <li><a href="/?action=create_diagram">Create a Diagram</a>
  </ul>
</nav>
<div class="main-container">
