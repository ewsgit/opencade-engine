/**

 Keycodes list
   - https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/

Backspace
Tab
Enter
Shift
Control
Alt
Pause
CapsLock
Escape
PageUp
PageDown
End
Home
ArrowLeft
ArrowUp
ArrowRight
ArrowDown
PrintScreen
Insert
Delete

0
1
2
3
4
5
6
7
8
9
a
b
c
d
e
f
g
h
i
j
k
l
m
n
o
p
q
r
s
t
u
v
w
x
y
z
Meta
ContextMenu
0
1
2
3
4
5
6
7
8
9
*
+
-
.
/
F1
F2
F3
F4
F5
F6
F7
F8
F9
F10
F11
F12
NumLock
ScrollLock
AudioVolumeMute
AudioVolumeDown
AudioVolumeUp
LaunchMediaPlayer
LaunchApplication1
LaunchApplication2
;
=
,
-
.
/
`
[
\
]
'
*/

export default class InputManagerKeys {
  pressedKeys: string[]

  constructor(pressedKeys: string[]) {
    this.pressedKeys = pressedKeys

    return this
  }

  space(): boolean {
    return this.pressedKeys.includes(' ')
  }

  enter(): boolean {
    return this.pressedKeys.includes('Enter')
  }

  escape(): boolean {
    return this.pressedKeys.includes('Escape')
  }

  backspace(): boolean {
    return this.pressedKeys.includes('backSpace')
  }

  arrow() {
    const t = this
    return {
      up() {
        t.pressedKeys.includes('arrowUp')
      },
      down() {
        t.pressedKeys.includes('arrowDown')
      },
      left() {
        t.pressedKeys.includes('arrowLeft')
      },
      right() {
        t.pressedKeys.includes('arrowRight')
      }
    }
  }

  numbers() {
    const t = this

    return {
      0: t.pressedKeys.includes('0'),
      1: t.pressedKeys.includes('1'),
      2: t.pressedKeys.includes('2'),
      3: t.pressedKeys.includes('3'),
      4: t.pressedKeys.includes('4'),
      5: t.pressedKeys.includes('5'),
      6: t.pressedKeys.includes('6'),
      7: t.pressedKeys.includes('7'),
      8: t.pressedKeys.includes('8'),
      9: t.pressedKeys.includes('9'),
      zero: t.pressedKeys.includes('0'),
      one: t.pressedKeys.includes('1'),
      two: t.pressedKeys.includes('2'),
      three: t.pressedKeys.includes('3'),
      four: t.pressedKeys.includes('4'),
      five: t.pressedKeys.includes('5'),
      six: t.pressedKeys.includes('6'),
      seven: t.pressedKeys.includes('7'),
      eight: t.pressedKeys.includes('8'),
      nine: t.pressedKeys.includes('9')
    }
  }

  symbol() {
    const t = this

    return {
      plus: t.pressedKeys.includes('+'),
      minus: t.pressedKeys.includes('-'),
      divide: t.pressedKeys.includes('/'),
      multiply: t.pressedKeys.includes('*'),
      ampersand: t.pressedKeys.includes('&'),
      caret: t.pressedKeys.includes('^'),
      equals: t.pressedKeys.includes('='),
      period: t.pressedKeys.includes('.'),
      comma: t.pressedKeys.includes(','),
      semicolon: t.pressedKeys.includes(';'),
      colon: t.pressedKeys.includes(':'),
      at: t.pressedKeys.includes('@'),
      underscore: t.pressedKeys.includes('_'),
      backslash: t.pressedKeys.includes('\\'),
      grave: t.pressedKeys.includes('`'),
      leftBracket: t.pressedKeys.includes('['),
      rightBracket: t.pressedKeys.includes(']'),
      leftBrace: t.pressedKeys.includes('{'),
      rightBrace: t.pressedKeys.includes('}'),
      quote: t.pressedKeys.includes('"'),
      singleQuote: t.pressedKeys.includes("'"),
      curlyBracket: t.pressedKeys.includes('{'),
      asterisk: t.pressedKeys.includes('*'),
      percent: t.pressedKeys.includes('%'),
      forwardSlash: t.pressedKeys.includes('/')
    }
  }

  letter() {
    const t = this

    return {
      a: t.pressedKeys.includes('a'),
      b: t.pressedKeys.includes('b'),
      c: t.pressedKeys.includes('c'),
      d: t.pressedKeys.includes('d'),
      e: t.pressedKeys.includes('e'),
      f: t.pressedKeys.includes('f'),
      g: t.pressedKeys.includes('g'),
      h: t.pressedKeys.includes('h'),
      i: t.pressedKeys.includes('i'),
      j: t.pressedKeys.includes('j'),
      k: t.pressedKeys.includes('k'),
      l: t.pressedKeys.includes('l'),
      m: t.pressedKeys.includes('m'),
      n: t.pressedKeys.includes('n'),
      o: t.pressedKeys.includes('o'),
      p: t.pressedKeys.includes('p'),
      q: t.pressedKeys.includes('q'),
      r: t.pressedKeys.includes('r'),
      s: t.pressedKeys.includes('s'),
      t: t.pressedKeys.includes('t'),
      u: t.pressedKeys.includes('u'),
      v: t.pressedKeys.includes('v'),
      w: t.pressedKeys.includes('w'),
      x: t.pressedKeys.includes('x'),
      y: t.pressedKeys.includes('y'),
      z: t.pressedKeys.includes('z')
    }
  }
}
