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
  <link rel="stylesheet" href="/assets/css/lib/reset.css"/>
  <link rel="stylesheet" href="/assets/css/lib/react-datetime.css"/>
  <link rel="stylesheet" href="/assets/css/styles.css"/>
  <!--<script src="/assets/js/lib/yconsole.js"></script>-->
  <!--<script>YConsole.show();YConsole.activate();</script>-->
  <script>
  </script>
  <script src="/assets/js/constants.js"></script>
  <script src="/assets/js/lib/jquery-3.2.1.min.js"></script>
  <script src="/assets/js/lib/moment-with-locales.min.js"></script>
  <script src="/assets/js/lib/lodash.min.js"></script>
  <script src="/assets/js/lib/react-with-addons.js"></script>
  <script src="/assets/js/lib/react-dom.js"></script>
  <script src="/assets/js/lib/react-datetime.js"></script>
  <script src="/assets/js/lib/browser.min.js"></script>
  <script src="/assets/js/app.js" type="text/babel"></script>
</head>
<body>
<nav>
  <ul class="nav">
    <li><a href="/?action=tables">List Tables & views</a>
    <li><a href="/?action=create_table">Create a Table</a>
    <li><a href="/?action=create_view">Create a View</a>
  </ul>
</nav>
<div class="main-container">
