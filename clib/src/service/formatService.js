

// Date to String 년월 YYYYMM
export function calDateStringYM(today) {
  if (today == null || today == '')
    return today;

  today = new Date(today);
  let year = today.getFullYear();
  let month =
      today.getMonth() + 1 >= 10
          ? today.getMonth() + 1
          : "0" + (today.getMonth() + 1);

  return year + '' + month;
}

// Date to String YYYYMMDD
export function calDateString(today) {
  if (today == null || today == '')
    return today;

  today = new Date(today);
  // console.log(today);
  let year = today.getFullYear();
  let month =
      today.getMonth() + 1 >= 10
          ? today.getMonth() + 1
          : "0" + (today.getMonth() + 1);
  let date = today.getDate() >= 10 ? today.getDate() : "0" + today.getDate();

  return year + '' + month + '' + date;
}

// Date to Time HHMMSS
export function calDateTime(today) {
  if (today == null || today == '')
    return today;

  let hour = today.getHours() >= 10 ? today.getHours() : "0" + today.getHours();
  let min = today.getMinutes() >= 10 ? today.getMinutes() : "0" + today.getMinutes();
  let sec = today.getSeconds() >= 10 ? today.getSeconds() : "0" + today.getSeconds();


  return hour + '' + min + '' + sec;
}

//파일 크기 포맷
export function formatFileSize(fileSize) {
  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  let idx = Math.floor(Math.log(fileSize) / Math.log(1024));

  return "(" + formatAmt((fileSize / Math.pow(1024, idx)).toFixed(0)) + sizes[idx] + ")";
}

//금액 포맷 0,000.00
export function formatAmt(value) {
  if (value != "0" && (value == null || value == ""))
    return "";

  let parts = value.toString().split(".");//소수점 구분
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}


// 전화번호 format
export function formatTel(num) {
  // console.log(num);
  if (num == null)
    return;
  num = num.replace(/[^0-9]/g, '');//숫자 외 제거
  if (num.length == 11) {
    return num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');//휴대전화
  }
  else if (num.length == 8)
    return num.replace(/(\d{4})(\d{4})/, '$1-$2');//8자리 전화번호
  else
    if (num.indexOf('02') == 0)
      return num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');//02 전화번호
    else
      return num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');//휴대전화
  
}