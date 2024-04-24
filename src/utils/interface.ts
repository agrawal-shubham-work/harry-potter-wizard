interface Ingredient {
  id: string;
  name: string;
}

export interface FilterState {
  Name: string;
  Difficulty: string;
  Ingredient: string;
  InventorFullName: string;
  Manufacturer: string;
}

export interface Elixir {
  id: string;
  name: string;
  difficulty: string;
  ingredients: Ingredient[];
  inventors: any[];
  manufacturer: string | null;
  [key: string]: any;
}
