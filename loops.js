function forLoop(array) {
  for (i = 1; i <25; i++) {
      if (i === 1) {
        return array.push("I am 1 strange loop.");
      }
    else{
    return array.push("I am " + i + " strane loop" + (i==0 ? '' : 's') + '.');
  }
}
}
