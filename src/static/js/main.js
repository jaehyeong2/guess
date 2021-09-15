(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFDckMsTUFBT0MsT0FBUCxHQUE0QkQsSUFBNUIsQ0FBT0MsT0FBUDtBQUFBLE1BQWdCQyxRQUFoQixHQUE0QkYsSUFBNUIsQ0FBZ0JFLFFBQWhCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGdCQUE2QkQsT0FBN0I7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlTm90aWYoZGF0YSkge1xyXG4gICAgY29uc3Qge21lc3NhZ2UsIG5pY2tuYW1lfSA9IGRhdGE7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtuaWNrbmFtZX0gOiAke21lc3NhZ2V9YClcclxufSJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You : ".concat(message));
}

function setNicname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNDUzNzA3ZTQuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY25hbWUiLCJuaWNrbmFtZSIsIm9uIiwiaGFuZGxlTWVzc2FnZU5vdGlmIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBNkI7QUFDekJILEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFBQ0QsSUFBQUEsT0FBTyxFQUFQQTtBQUFELEdBQTFCO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixpQkFBcUJILE9BQXJCO0FBQ0g7O0FBRUQsU0FBU0ksVUFBVCxDQUFvQkMsUUFBcEIsRUFBNkI7QUFDekJSLEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGFBQVosRUFBMEI7QUFBQ0ksSUFBQUEsUUFBUSxFQUFSQTtBQUFELEdBQTFCO0FBQ0g7O0FBRURSLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLGNBQVYsRUFBeUJDLHdCQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZiB9IGZyb20gXCIuL2NoYXRcIjtcclxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xyXG5cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSl7XHJcbiAgICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwge21lc3NhZ2V9KTtcclxuICAgIGNvbnNvbGUubG9nKGBZb3UgOiAke21lc3NhZ2V9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5pY25hbWUobmlja25hbWUpe1xyXG4gICAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLHtuaWNrbmFtZX0pO1xyXG59IFxyXG5cclxuc29ja2V0Lm9uKFwibWVzc2FnZU5vdGlmXCIsaGFuZGxlTWVzc2FnZU5vdGlmKSJdfQ==
},{"./chat":1}]},{},[2])