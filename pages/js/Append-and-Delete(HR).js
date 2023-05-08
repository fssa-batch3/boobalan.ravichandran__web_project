function appendAndDelete(s, t, k) {
  const min_length = Math.min(s.length, t.length);
  let breakpoint = 0;
  for (let i = 0; i < min_length; i++) {
    if (s[i] === t[i]) {
      breakpoint++;
    } else {
      break;
    }
  }
  const dif_s = s.length - breakpoint;
  const dif_t = t.length - breakpoint;
  if (
    dif_s + dif_t > k ||
    ((k - dif_s - dif_t) % 2 !== 0 && s.length + t.length > k)
  ) {
    return "No";
  }
  return "Yes";
}
console.log(appendAndDelete("hackerhappy", "hackerrank", 9)); // output is Yes
