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
