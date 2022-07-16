//Tính tiền lương  ngày làm -->
document.getElementById("btnTinhLuong").onclick = function () {
  var tienLuongMotNgay = document.getElementById("luongMotNgay").value;
  var soNgayLam = document.getElementById("soNgayLam").value;

  var total = tienLuongMotNgay * soNgayLam;

  var format = new Intl.NumberFormat("vn-VN");
  var totalVND = format.format(total) + " vnd";

  // Cach 2 :
  // var showInfo = "";
  // showInfo += "<p>" + "Tổng tiền lương là :" + "</p>";
  // showInfo += "<p>" + total + " vnd" + "</p>";

  document.getElementById("thongBaoTienLuong").innerHTML = totalVND;
  document.getElementById("thongBaoTienLuong").classList.add("bg-success");
  document.getElementById("thongBaoTienLuong").classList.add("text-white");
  document.getElementById("thongBaoTienLuong").classList.add("p-2");
  document.getElementById("thongBaoTienLuong").classList.add("rounded");
};

// Bài 2 Tính trung bình -->
document.getElementById("btnTinhTrungBinh").onclick = function () {
  var input1 = document.getElementById("soThu1").value * 1;
  var input2 = document.getElementById("soThu2").value * 1;
  var input3 = document.getElementById("soThu3").value * 1;
  var input4 = document.getElementById("soThu4").value * 1;
  var input5 = document.getElementById("soThu5").value * 1;

//   var realNumber1 = +input1.value;
//   var realNumber2 = +input2.value;
//   var realNumber3 = +input3.value;
//   var realNumber4 = +input4.value;
//   var realNumber5 = +input5.value;

  var totalAverage =
    (input1 + input2 + input3 + input4 + input5) / 5;

  document.getElementById("thongBaoTrungBinh").innerHTML = "Gía trị trung bình là : " + totalAverage;
  document.getElementById("thongBaoTrungBinh").classList.add("bg-success");
  document.getElementById("thongBaoTrungBinh").classList.add("text-white");
  document.getElementById("thongBaoTrungBinh").classList.add("p-2");
  document.getElementById("thongBaoTrungBinh").classList.add("rounded");
};

// Bài 3 : Tính Quy đổi tiền

document.getElementById("btnQuyDoi").onclick = function() {
  var giaUSD = 23500;
  var soUSD = document.getElementById("soUSD").value * 1;
  
  var total = giaUSD * soUSD;
  
  var format = new Intl.NumberFormat("vn-VN");
  var totalVND = format.format(total) + " vnd";

  document.getElementById("thongBaoQuyDoi").innerHTML = totalVND;
  document.getElementById("thongBaoQuyDoi").classList.add("bg-success");
  document.getElementById("thongBaoQuyDoi").classList.add("text-white");
  document.getElementById("thongBaoQuyDoi").classList.add("p-2");
  document.getElementById("thongBaoQuyDoi").classList.add("rounded");
}
// <!-- Bài 4 : Tính diện tích, chu vi hình chữ nhật -->
document.getElementById("btnCalc").onclick = function() {
  
  var long = document.getElementById("long").value * 1;
  var wide = document.getElementById("wide").value * 1;

  
  var area = long * wide;
  var peri = (long + wide) * 2 ;
  

  document.getElementById("thongBaoCalc").innerHTML = "Diện tích : " + area +";" + " Chu vi : " + peri;
  document.getElementById("thongBaoCalc").classList.add("bg-success");
  document.getElementById("thongBaoCalc").classList.add("text-white");
  document.getElementById("thongBaoCalc").classList.add("p-2");
  document.getElementById("thongBaoCalc").classList.add("rounded");
}
// Bài 5 : Tính tổng 2 ký số
document.getElementById("btnSum").onclick = function() {
  
  var input1 = document.getElementById("twoNumber");
  var n = +input1.value;
  var num1 = n % 10;
  var num2 = Math.floor(n / 10);
  var total = num1 + num2;
  console.log(total);
  document.getElementById("thongBaoSum").innerHTML = "Tổng 2 số : " + total;
  document.getElementById("thongBaoSum").classList.add("bg-success");
  document.getElementById("thongBaoSum").classList.add("text-white");
  document.getElementById("thongBaoSum").classList.add("p-2");
  document.getElementById("thongBaoSum").classList.add("rounded");
}