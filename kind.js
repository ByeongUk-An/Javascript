function addressKindChange(e) {
  let seoul = ["강남", "홍대", "영등포", "여의도"];
  let gyeonggi = ["수원", "평택", "용인"];
  let chungcheongnam = ["천안", "세종", "논산"];
  let target = document.getElementById("addressKindD");
  let d = [];
  if (e.value == "a") {
    d = seoul;
  } else if (e.value == "b") {
    d = gyeonggi;
  } else if (e.value == "c") {
    d = chungcheongnam;
  }

  target.options.length = 0;

  for (let a in d) {
    let opt = document.createElement("option");
    opt.value = d[a];
    opt.innerHTML = d[a];
    target.appendChild(opt);
  }
}

let arr = [1, 2, 3, 4, 5, 6];

for (let i in arr) {
  console.log(arr[i]);
}
