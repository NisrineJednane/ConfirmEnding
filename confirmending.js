//FCC: check if string ends with the given target string: 

function confirmEnding(s,t) {
  return (s.slice(s.length - t.length)===t) ? true : false;
 }
