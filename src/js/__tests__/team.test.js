import Team from '../Team';
import Character from '../Character';

const mem1 = new Character('mem1', 'Swordsman');
const mem2 = new Character('mem2', 'Swordsman');
const mem3 = new Character('mem3', 'Swordsman');

test('test add ', () => {
  const newTeam = new Team();
  newTeam.add(mem1);
  const iterator = newTeam.members.values();
  expect(iterator.next().value).toEqual({
    attack: 0,
    defence: 0,
    health: 100,
    level: 1,
    name: 'mem1',
    type: 'Swordsman',
  });
});

test('test Error ', () => {
  const newTeam = new Team();
  newTeam.add(mem1);
  const result = () => newTeam.add(mem1);
  expect(result).toThrow('Персонаж уже в команде');
});


test('test addAll ', () => {
  const newTeam = new Team();
  newTeam.addAll(mem1, mem2, mem3, mem2);
  const iterator = newTeam.members.values();
  const Array = [];
  for (const key of iterator) {
    Array.push(key);
  }
  expect(Array).toEqual([{
    attack: 0,
    defence: 0,
    health: 100,
    level: 1,
    name: 'mem2',
    type: 'Swordsman',
  },
  {
    attack: 0,
    defence: 0,
    health: 100,
    level: 1,
    name: 'mem3',
    type: 'Swordsman',
  },
  ]);
});

test('test toArray ', () => {
  const newTeam = new Team();
  newTeam.addAll(mem1, mem2, mem3, mem2);
  newTeam.toArray();
  const result = newTeam.toArray();

  expect(result).toEqual([{
    attack: 0,
    defence: 0,
    health: 100,
    level: 1,
    name: 'mem2',
    type: 'Swordsman',
  },
  {
    attack: 0,
    defence: 0,
    health: 100,
    level: 1,
    name: 'mem3',
    type: 'Swordsman',
  },
  ]);
});
