function forLoop(array) {
  for (i = 1; i <= 25; i++) {
      if (i === 1) {
        return "I am 1 strange loop.";
      }
    else{
    return "I am " + i + " strane loop" + (i==0 ? '' : 's') + '.';
  }
}
}
