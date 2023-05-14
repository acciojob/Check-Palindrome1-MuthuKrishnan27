// complete the given function

function palindrome(s){
	s = s.toLowerCase();
	let st = 0;
	let ed = s.length-1;
	while(st<ed){
		if(s.charAt(st)!==s.charAt(ed)){
			return false;
		}
		st++;
		ed--;
	}
	return true;
}
module.exports = palindrome
