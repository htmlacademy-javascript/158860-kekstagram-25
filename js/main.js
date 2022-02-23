function getRandomInt(min, max) {
  if (min >= 0 && max > 0 && max > min) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  }
  return 'Неверный диапазон';
}
getRandomInt(5, 25);

function checkString(comment, maxLength) {
  if (comment.length <= maxLength) {
    return true;
  }
  return false;
}
checkString('Тест', 5);
