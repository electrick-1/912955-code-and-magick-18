'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_GRAPH = 150;
var barHeight = BAR_GRAPH - GAP - FONT_GAP;
var basicTextColor = '#000';


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var textInsert = function (ctx, text, x, y, color) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderRect = function (ctx, elements, maxElement, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, BAR_WIDTH, (barHeight * elements) / maxElement);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  textInsert(ctx, 'Ура вы победили!', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP + GAP, basicTextColor);
  textInsert(ctx, 'Список результатов:', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + (FONT_GAP + GAP) * 2, basicTextColor);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    textInsert(ctx, Math.floor(times[i]), CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP + (FONT_GAP + GAP) * 3 + BAR_GRAPH - (barHeight * times[i]) / maxTime, basicTextColor);

    if (names[i] === 'Вы') {
      renderRect(ctx, times[i], maxTime, CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + (FONT_GAP + GAP) * 3 + BAR_GRAPH - (barHeight * times[i]) / maxTime, 'rgba(255, 0, 0, 1)');
    } else {
      renderRect(ctx, times[i], maxTime, CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + (FONT_GAP + GAP) * 3 + BAR_GRAPH - (barHeight * times[i]) / maxTime, 'hsl(240,' + Math.floor(Math.random() * 100) + '%' + ', 50%)');
    }

    textInsert(ctx, names[i], CLOUD_X + BAR_WIDTH + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + (FONT_GAP + GAP) * 5 + barHeight, basicTextColor);
  }
};
