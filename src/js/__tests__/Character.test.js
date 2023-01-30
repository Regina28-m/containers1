import Character from '../Character';

test('create new class', () => {
  const result = new Character('Bow', 'Swordsman');
  const sample = {
    name: 'Bow',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  };
  expect(result).toEqual(sample);
});


test('catsh the Error with name', () => {
  const result1 = () => new Character('B', 'Swordsman');
  expect(result1).toThrow('Длина имени не соответствует условиям');
});

test('catsh the Error with type', () => {
  const result2 = () => new Character('Bow', 'Sword');
  expect(result2).toThrow('Не соответствие заданным типам');
});
