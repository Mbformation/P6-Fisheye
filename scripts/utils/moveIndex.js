// renvoie la nouvelle valeur d'un index après incrémentation ou
// décrémentation
function moveIndex(direction, current, length) {
  if (direction === +1) {
    return current >= length - 1 ? 0 : current + 1;
  } else if (direction === -1) {
    return current <= 0 ? length - 1 : current - 1;
  }
}

export default moveIndex;
