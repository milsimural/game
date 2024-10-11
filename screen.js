const screen = [];

// screen.push(line01, line02, line03, line04, line05, line06, line07, line08, line09);

const line = `-X------------------------------------------------`;

let player = [0, 1]

const group() {
  const oldPlayerPosition = player;
  player[0] += 1;
  arr[player[0]][player[1]] = 'P'
  arr[oldPlayerPosition[0]][oldPlayerPosition[1] = ' ']

}

console.log(line.length);

const playerLine = '---------O----------------------------------------';
const clearLine = '                                                  ';
const fullLine = '-Q--DD---O--W-----D----W------X------S-----P------';

const endgameMessage = [
  '                                                  ',
  '       ####     ##      ##  ##    #####           ',
  '      #    #   #  #    #  ##  #   #               ',
  '      #       #    #  #        #  #               ',
  '      #       #    #  #        #  #####           ',
  '      #   ##  ######  #        #  #               ',
  '      #    #  #    #  #        #  #               ',
  '       ####   #    #  #        #  #####           ',
  '                                                  ',
  '      ####   #     #   ####   ####      #         ',
  '      #  #   #     #   #      #  #      #         ',
  '      #  #    #   #    ####   ####      #         ',
  '      #  #     # #     #      # #                 ',
  '      ####      #      ####   #  #      #         ',
  '                                                  ',
];

screen.push(
  line,
  playerLine,
  line,
  line,
  playerLine,
  clearLine,
  line,
  fullLine,
  line,
  line,
);

// while(true) {
// Обновлять консоль логом массив "экрана" каждые n миллисекунд

// Если происходит событие, обновить массив согласно событию

//
// }

// console.log(screen);

const readline = require('readline');

// Установим интерфейс для чтения данных из stdin
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

// Функция, которая будет постоянно выводить строку в консоль
function printLine() {
  console.clear();
  console.log(screen);
  setTimeout(printLine, 1000); // Повторять каждую секунду
}

//printLine();

// Реагируем на нажатие клавиш
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit(); // Завершаем программу на Ctrl+C
  } else if (key.name === 'w') {
    // dome thing}
  } else {
    console.log(`Вы нажали: ${key.name}`);
  }
});

// Суть идеи - поле это массив строк которое перерисовывается каждый кадр.
// Когда в игре что то происходит (например асинхронное событие) срабатывают методы строк и меняют строки.

// Функция перехода на линии - WS
// Функция стрельбы и перемещения снаряда влево
// Функция случайного появления врага в конце строк
// Функция движения врага вправо
// Событие конец игры
// Функция проверки что снаряд на соседней строке с врагом - > функция поражения врага
// Функция спецэффекта при попадании во врага
// Функция спецэффекта при смерти
// Функция проигрывания звука при событиях (выстрел, передвижение, движение врага)
