function updateClock() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var hour_arg = Math.PI*(1/2 - hour/6 - minute/360 - second/21600) % (2*Math.PI)
  var minute_arg = Math.PI*(1/2 - minute/30 - second/1800) % (2*Math.PI)
  var second_arg = Math.PI*(1/2 - second/30) % (2*Math.PI)
  var hour_sin = Math.sin(hour_arg).toFixed(4)
  var hour_cos = Math.cos(hour_arg).toFixed(4)
  var minute_sin = Math.sin(minute_arg).toFixed(4)
  var minute_cos = Math.cos(minute_arg).toFixed(4)
  var second_sin = Math.sin(second_arg).toFixed(4)
  var second_cos = Math.cos(second_arg).toFixed(4)

  if (hour_sin >= 0) {
    hour_sin = ' ' + hour_sin
  }
  if (hour_cos >= 0) {
    hour_cos = ' ' + hour_cos
  }
  if (minute_sin >= 0) {
    minute_sin = ' ' + minute_sin
  }
  if (minute_cos >= 0) {
    minute_cos = ' ' + minute_cos
  }
  if (second_sin >= 0) {
    second_sin = ' ' + second_sin
  }
  if (second_cos >= 0) {
    second_cos = ' ' + second_cos
  }

  document.getElementById('clockHour').innerHTML
    = 'Sin:' + hour_sin + ' Cos:' + hour_cos + ' 時\n'
  document.getElementById('clockMinute').innerHTML
    = 'Sin:' + minute_sin + ' Cos:' + minute_cos + ' 分\n'
    document.getElementById('clockSecond').innerHTML
      = 'Sin:' + second_sin + ' Cos:' + second_cos + ' 秒\n'
}
setInterval('updateClock()',1000);
