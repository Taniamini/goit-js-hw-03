function slugify(title) {
  // спочатку приводимо рядок до нижнього регістру
  const lowerTitle = title.toLowerCase();
  // розбиваємо рядок на слова
  const words = lowerTitle.split(' ');
  // і об'єднуємо слова для належного вигляду slug
  const slug = words.join('-');
  return slug;
}
console.log(slugify('Arrays for begginers')); // "arrays-for-begginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
