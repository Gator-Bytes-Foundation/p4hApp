/**
 * This is the main JS file that will get loaded on every page
 *
 * All page specific code should be explictly loaded in that template
 *
 */

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

window.$ = $;

// handle posts
$(".nav-item").mouseover(function (e) {
  $(this).addClass("pulse");
});
$(".nav-item").mouseout(function (e) {
  $(this).removeClass("pulse");
});
