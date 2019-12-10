const votes = {
  0: () => '★☆☆☆☆',
  1: () => '★★☆☆☆',
  2: () => '★★★☆☆',
  3: () => '★★★★☆',
  4: () => '★★★★★',
};

const drawRating = (vote) => {
  if (vote <= -1 || vote > 100) {
    return 'Incorrect vote';
  }
  const rating = Math.trunc(vote / 21);
  return votes[rating]();
};

export default drawRating;
