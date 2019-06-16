'use strict';

/**
 * Canvas wrapper API
 */
var canvas = require('canvas-api-wrapper')
//  https://<subdomain>.instructure.com (default: byui)
canvas.subdomain = 'canvas' // TODO do we need to establish unique subdomain
canvas.apiToken = "7~BCN86cSqEzKzNQe9QJNj3rJDYFrC8Z2X2GhOMNYueR72gdzQVBtAN5htw2yUPIQD" // Canvas API token - Logan's Canvas account

// Canvas uses a rate-limit point system to handle spamming. Canvas
// currently fills your account to 700 'points' though subject to change
// then subtracts from your 'points' every time you make a call. If 
// you go below 0 then canvas will start sending you 403 (unauthorized) 
// statuses. So when your account goes under the 'rateLimitBuffer'
// this module will halt the requests until it gets filled back to 
// the 'rateLimitBuffer'. Give it a pretty large buffer, it tends to 
// go quite a ways past the buffer before this module catches it.
canvas.rateLimitBuffer = 300;
// How many to send synchronously at the same time, the higher this
// number, the more it will go over your rateLimitBuffer
canvas.callLimit = 30;

// How much the calls are staggered (milliseconds) especially at the
// beginning so that it doesn't send the callLimit all at the same time
canvas.minSendInterval = 10;

// After it goes under the rateLimitBuffer, how often (in milliseconds) 
// to check what the buffer is at now, this should be pretty high because
// there will be a lot of threads checking at the same time.
canvas.checkStatusInterval = 2000;

// oncall function as an event handler to debug
canvas.oncall = function(e){
    console.log(e)
}

await canvas.getCourse(11310).pages.create({
    title:'Hello World',
    body:'<h1>Hello World</h1>',
    published: true
})

{ method: 'POST',
  url: 'https://byui.instructure.com/api/v1/courses/11310/pages/',
  body:
   { wiki_page:
      { title: 'Hello World',
        body: '<h1>Hello World</h1>',
    published: true } } }
