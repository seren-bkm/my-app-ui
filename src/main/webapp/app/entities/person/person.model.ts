export interface IPerson {
  id?: number;
  name?: string;
  surname?: string | null;
  age?: number;
}

export class Person implements IPerson {
  constructor(public id?: number, public name?: string, public surname?: string | null, public age?: number) {}
}

export function getPersonIdentifier(person: IPerson): number | undefined {
  return person.id;
}
