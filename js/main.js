
function getNumberInt (min, max) {
  if (min >= 0 && max > 0 && max > min){
    const number = Math.floor(Math.random() * (max - min + 1 ) + min);
    return number;
  } else {
    return 'Неверный диапазон';
  }
}
getNumberInt (5,25);

function getCommentLength (comment, maxLength) {
  if (comment.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
getCommentLength('Тест', 5);
