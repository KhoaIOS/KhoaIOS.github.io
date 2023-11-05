# KhoaIOS.github.io
<table>
  <tr>
    <td colspan="2">
      <h1>Máy Tính Tỉ Lệ Thắng AOV-RoV</h1>
      <h2>Web Tính Tỉ Lệ Thắng</h2>
    </td>
  </tr>
      <tr>
    <td colspan="2">
      <span style="color:#900">
        * Code viết cho vui thôi :v, nếu có sai sót xin thông báo FB: 2im.dangkhoaa. </br></br>
      </span>
    </td>
  </tr>
  <tr>
    <td>
      Tỷ lệ thắng hiện tại
    </td>
    <td>
      <input type="text" id="win_now" autocomplete="off"/>
    </td>
  </tr>
  <tr>
    <td>
      Tỷ lệ thắng mong muốn
    </td>
    <td>
      <input type="text" id="win_need" autocomplete="off"/>
    </td>
  </tr>
  <tr>
    <td>
      Tổng số trận đã chơi
    </td>
    <td>
      <input type="text" id="n" autocomplete="off"/>
    </td>
  </tr>

  <tr>
    <td colspan="2" style="text-align:center">
      <br/>
      <input type="button" value="Calculate" onclick="javascript:calculate()">
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <div id="output">&nbsp;</div>
    </td>
  </tr>
</table>

body{
  font-family:sans-serif;
  font-size:16px;
}
table{
  margin:0 auto;
  max-width:400px;
  
}
input{
  font-size:16px;
}
#output{
  margin-top:16px;
  text-align:center;
}

getIntFromString = function(a){
	if (isNaN(a))
	{
		groups = a.match(/([0-9.]+)/);
		if (groups != null && groups.length > 0){
			return groups[0];
		}
		return 0;
	}
	return a;
}

normaliseGrade = function (win_now, win_need, n){
  win_now = getIntFromString(win_now)
  win_need = getIntFromString(win_need)
  n = getIntFromString(n)
  n_win = (win_now/100)*n
  n_need = ((win_need*n)-(100*n_win.toFixed(0)))/(100-win_need)
  return n_need.toFixed(0);
}

calculate = function(){
  participation = document.getElementById("win_now").value;
  mcq = document.getElementById("win_need").value;
  course_work = document.getElementById("n").value;
  score = normaliseGrade(participation,mcq,course_work)
  output = "<strong> ต้องเล่นให้ชนะติดต่อกันอีก " + score + " ตา</strong>"
  console.debug(output)
  document.getElementById("output").innerHTML = output
}
