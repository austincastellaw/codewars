// In this game, there are 21 sticks lying in a pile. Players take turns taking 1, 2, or 3 sticks. The last person to take a stick wins.
// Create a robot that will always win the game. Your robot will always go first. The function should take an integer and returns 1, 2, or 3.

function makeMove(sticks) {
  if (sticks % 4 === 1) return 1;
  if (sticks % 4 === 2) return 2;
  if (sticks % 4 === 3) return 3;
}