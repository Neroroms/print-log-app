var index: number = 0;

console.log("Hello, I'm init container. (ノ^∇^)")

while (index < 10) {
  if (index % 2 == 0) {
    console.log ("Hello even number. ( ◞･౪･) " + index.toString());
  } else if (index % 2 == 1) {
    console.log ("Say hi to odd number. ( ´ ▽ ` )ﾉ " + index.toString())
  }

  index++;
}

console.log("Init container log is end. Bye （⌒▽⌒ゞ")