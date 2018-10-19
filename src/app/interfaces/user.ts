export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  age: number;
  race: string;
  nourriture: string;
  amis: any[];
  roles: any[];
}