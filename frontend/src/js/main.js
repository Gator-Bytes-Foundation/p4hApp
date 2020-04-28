/**
 * This is the main JS file that will get loaded on every page
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css/animate.min.css";
import "open-iconic/font/css/open-iconic-bootstrap.css";
import "../css/main.css";
import "../css/navbar.css";
import $ from "jquery";

window.$ = $;

// handle posts
$(".nav-item").mouseover(function (e) {
  $(this).addClass("pulse");
});
$(".nav-item").mouseout(function (e) {
  $(this).removeClass("pulse");
});
