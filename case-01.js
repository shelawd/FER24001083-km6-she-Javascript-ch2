function changeWord(selectedText, changedText, text) {
  if (typeof changedText == "string" && typeof selectedText == "string") {
    const textBaru = text.replace(selectedText, changedText);
    return textBaru;
  }
  return "Salah";
}
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));

console.log(changeWord("bromo", "semeru", kalimat2));
