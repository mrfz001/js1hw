var username, age, task;
username =prompt('Как вас зовут?')
age=prompt('Введите свой возраст')
task=prompt('Решите пример: 10 + 2 = ?')
task=prompt('Решите пример: 10 - 7 = ?')
task=prompt('Решите пример: 10 / 2 = ?')
task=prompt('Решите пример: 10 * 2 = ?')
task=prompt('Решите пример: 10 % 5 = ?')
alert('зайдите в консоль')
console.log('Ваc зовут: '+ username)
console.log('Ваc ваш возраст: '+ age)
console.log('1 пример: 10 + 2 = '+(10 + 2)+'. Ваш ответ:'+ task)
console.log('2 пример: 10 - 7 = '+(10 - 7)+'. Ваш ответ:'+ task)
console.log('3 пример: 10 / 2 = '+(10 / 2)+'. Ваш ответ:'+ task)
console.log('4 пример: 10 * 2 = '+(10 * 2)+'. Ваш ответ:'+ task)
console.log('5 пример: 10 % 5 = '+(10 % 5)+'. Ваш ответ:'+ task)

alert('введите 3 любых числа')
var X, Y, Z, res;
X=prompt('1 число:')
Y=prompt('2 число:')
Z=prompt('3 число:')
res=((X+Y+Z)/3)
alert('среднее арифметическое: '+res)