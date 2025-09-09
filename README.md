### Hexlet tests and linter status:
[![Actions Status](https://github.com/VgomerV/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/VgomerV/frontend-project-44/actions)   [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=VgomerV_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=VgomerV_frontend-project-44)

# Консольное приложение - "Игры разума"

*Игры разума* - набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

1. Калькулятор. Арифметические выражения, которые необходимо вычислить.
2. Прогрессия. Поиск пропущенных чисел в последовательности чисел.
3. Определение четного числа.
4. Определение наибольшего общего делителя.
5. Определение простого числа.

### Установка

```
$ sudo npm link 
```

## Игра: "Проверка на чётность"

Суть игры в следующем: игроку показывается случайное число. И нужно определить чётное оно или нечётное.

*Запуск игры*

```
$ brain-even
```

*Пример игры*

[![asciicast](https://asciinema.org/a/dHTc7w3r99fwjwkECdJJ35HKV.svg)](https://asciinema.org/a/dHTc7w3r99fwjwkECdJJ35HKV)

## Игра: "Калькулятор"

Суть игры в следующем: игроку показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

*Запуск игры*

```
$ brain-calc
```

*Пример игры*

[![asciicast](https://asciinema.org/a/WwRjlvOuKCvnMRBzBb22xiDGf.svg)](https://asciinema.org/a/WwRjlvOuKCvnMRBzBb22xiDGf)

## Игра "НОД"

Суть игры в следующем: игроку показывается два случайных числа, например, 25 50. Необходимо вычислить и ввести наибольший общий делитель этих чисел.

*Запуск игры*

```
$ brain-gcd
```

*Пример игры*

[![asciicast](https://asciinema.org/a/S5vLk6MaxPpKJm93GBfzvrOCa.svg)](https://asciinema.org/a/S5vLk6MaxPpKJm93GBfzvrOCa)

## Игра "Арифметическая прогрессия"

Суть игры в следующем: игроку показывается ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

*#Запуск игры*

```
$ brain-progression
```

*Пример игры*

[![asciicast](https://asciinema.org/a/TkK6U8zcoqdk0YoRtqFq2bTed.svg)](https://asciinema.org/a/TkK6U8zcoqdk0YoRtqFq2bTed)

## Игра "Простое ли число?"

Суть игры в следующем: игроку показывается случайное число. И нужно определить простое оно или нет.

*Запуск игры*

```
$ brain-prime
```

*Пример игры*

[![asciicast](https://asciinema.org/a/E0P3cPEBKsyHK8AudMqgiy57q.svg)](https://asciinema.org/a/E0P3cPEBKsyHK8AudMqgiy57q)
