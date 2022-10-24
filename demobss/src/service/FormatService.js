

//파일 크기 포맷
export function formatFileSize(fileSize) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  var idx = Math.floor(Math.log(fileSize) / Math.log(1024));

  return "(" + formatAmt((fileSize / Math.pow(1024, idx)).toFixed(0)) + sizes[idx] + ")";
}

//금액 포맷 0,000.00
export function formatAmt(value) {
  if (value != "0" && (value == null || value == ""))
    return "";

  var parts = value.toString().split(".");//소수점 구분
  return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}
