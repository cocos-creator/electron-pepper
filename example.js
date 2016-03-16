// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called by the common.js module.
function attachListeners() {
  document.getElementById('playButton').addEventListener('click', playSound);
  document.getElementById('stopButton').addEventListener('click', stopSound);
  document.getElementById('frequencyField').addEventListener('change',
      changeFrequency);
}

function getFrequencyElement() {
  return document.getElementById('frequencyField');
}

function playSound() {
  var audio = document.getElementById('audio')
  audio.postMessage('setFrequency:' + getFrequencyElement().value);
  audio.postMessage('playSound');
}

function stopSound() {
  var audio = document.getElementById('audio')
  audio.postMessage('stopSound');
}

function changeFrequency() {
  var audio = document.getElementById('audio')
  audio.postMessage('setFrequency:' + getFrequencyElement().value);
}

// Called by the common.js module.
function handleMessage(e) {
  getFrequencyElement().value = message_event.data;
}

attachListeners();
