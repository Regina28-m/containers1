export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(newMember) {
    if (this.members.has(newMember)) {
      throw new Error('Персонаж уже в команде');
    } else {
      this.members.add(newMember);
    }
  }

  addAll(...members) {
    for (const member of members) {
      this.members.add(member);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
