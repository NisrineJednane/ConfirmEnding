//FCC: check if ending matches string
//ES6 version: 

const confirmEnding = (s,t) => (s.slice(s.length - t.length)===t) ? true : false;
