export interface FoodType {
  url: string;
  name: string;
  protein: number;
  carbs: number;
  fats: number;
}

export type modalData = {
  url: string;
  food: {
    id: number;
    "Calories per 100g": number;
    Name: string;
    "Protein(g)": number;
    "Carbs (g)": number;
    "Fats(g)": number;
  };
};
