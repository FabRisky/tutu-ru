## Задача №1

Написать функцию `dscount`, которая подсчитывает количество идущих подряд символов `s1` и `s2` в строке, без учёта регистра.

**Ответ:**
Файл находится по пути src/fizzBuzz.js тесты к нему __test__/fizzBuzz.test.js
тесты можно запустить из терминала командой make test.

## Задача №2

Реализовать функцию `checkSyntax(string)`, проверяющую на синтаксическую верность последовательность скобок.
Задача не сводится к простой проверке сбалансированности скобок.
Нужно еще учитывать их последовательность (вложенность).

**Ответ:**
Файл находится по пути src/checkSyntax.js тесты к нему __test__/checkSyntax.test.js
тесты можно запустить из терминала командой make test.


## Задача №3 Алгоримт
Есть 2 сковороды для оладьев, каждая из которых вмещает ровно по 1 блинчику за 1 раз.
Есть 3 панкейка (блинчика), которые надо пожарить.
За 1 минуту жарится 1 сторона блинчика.
Блинчики надо обжарить с 2х сторон.
Итерацией считать процесс жарки 1й стороны 2х блинчиков на 2х сковородах. Сколько нужно времени (итераций) при оптимальном распределении чтобы пожарить 3 панкейка?

Релизуйте ваш алгоритм в виде кода. Это может быть как ООП код, так и функциональный и даже процедурный. Выбор подхода обоснуйте.

Обязательно опишите алгоритм, как бы вы решали эту задачу в физическом мире (в какой момент и как жарили бы эти блинчики).

**Ответ:**
 Алгоритм находится по пути src/cake.js
 Алгоритм основан на 
 Алгоримт:
 1) положить два блинчика на две сковородки;
 2) снять со сторой сковородки блинчик и положить на нее третий и перевернуть блиник на первой сковородке;
 3) снять первый блинчик(он готов), положить на первую сковородку второй блинчик, перевернуть 3 блинчик
 4) все блинчики готовы. С пылу сжару, наслаждаейтес:)
  
## Задача №4 Рефактор 
  
 **Ответ:**
 Файл находится по пути src/func.js тесты к нему __test__/func.test.js
 тесты можно запустить из терминала командой make test.
  