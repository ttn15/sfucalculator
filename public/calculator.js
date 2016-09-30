

function calculate() {
  for (var i = 1; i<5; i++) {
    var num = document.getElementById("a"+i+"_num").value;
    var den = document.getElementById("a"+i+"_denom").value;
    var per = num / den * 100;
    if( isFinite(per) == false || per < 0 ) { //skips calculation if input values are empty
      document.getElementById("percentage"+i).innerHTML = "";
      continue;
    }
    per = Math.round(per * 100) / 100;
    document.getElementById("percentage"+i).innerHTML = per + "%";
  }
}



function mean() {
  var total = 0;
  var ActivityCount = 0; //number of activities counted in the mean
  for (var i = 1; i <5; i++) {
    var num = document.getElementById("a"+i+"_num").value;
    var den = document.getElementById("a"+i+"_denom").value;
    var temp_total = num / den;
    if( isFinite(temp_total) == false || temp_total < 0 ) {
      continue;
    }
    ActivityCount++;
    total += parseFloat(temp_total);
  }
  total = total / ActivityCount * 100;
  total = Math.round(total * 100) / 100;
  document.getElementById("total_per").innerHTML = total + "%";
}

function weighted(){
  var total = 0;
  var WeiTotal = 0;
  for (var i = 1; i <5; i++) {
    var num = document.getElementById("a"+i+"_num").value;
    var den = document.getElementById("a"+i+"_denom").value;
    var wei = document.getElementById("weight"+i).value;
    var temp_total = (num/den)*wei;
    if( isFinite(temp_total) == false || temp_total < 0 ) {
      continue;
    }
    WeiTotal+=parseInt(wei);
    total += parseFloat(temp_total);
  }
  total = total / WeiTotal * 100;
  total = Math.round(total * 100) / 100;
  document.getElementById("total_per").innerHTML = total + "%";
}
