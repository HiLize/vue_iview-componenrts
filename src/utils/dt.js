export const format = function (dt, format='yyyy-MM-dd hh:mm:ss') {
  if (typeof(dt) === 'string') {
    return dt
  }

  var o = {
    'M+': dt.getMonth() + 1, // month
    'd+': dt.getDate(), // day
    'h+': dt.getHours(), // hour
    'm+': dt.getMinutes(), // minute
    's+': dt.getSeconds(), // second
    'q+': Math.floor((dt.getMonth() + 3) / 3), // quarter
    'S': dt.getMilliseconds() // millisecond
  }

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (dt.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1,
        RegExp.$1.length === 1 ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }

  return format
}

// 时间转到秒
export const timeToSeconds = (h, m, s) => {
  return h * 3600 + m * 60 + parseInt(s)
}

// 秒转到时间
export const secondsToTime = (seconds) => {
  let h = Math.floor(seconds / 3600)
  let m = Math.floor((seconds - h * 3600) / 60)
  let s = seconds % 60

  h = h >= 10 ? h : '0' + h
  m = m >= 10 ? m : '0' + m
  s = s >= 10 ? s : '0' + s
  return [h, m, s]
}

export default {
  format,
  timeToSeconds,
  secondsToTime
}
