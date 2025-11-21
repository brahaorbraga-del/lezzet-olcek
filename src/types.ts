export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
    weight?: string; // e.g., "150g"
}

export interface Step {
    order: number;
    instruction: string;
}

export interface CookingMethod {
    name: string; // e.g., "Tavada", "Fırında"
    description: string;
    time: string; // e.g., "20 dk"
    steps: Step[];
}

export interface StorageInfo {
    roomTemp?: string; // e.g., "2 saat", "Oda sıcaklığında saklanmaz"
    fridge?: string; // e.g., "3 gün", "Hava geçirmez kapta 5 gün"
    freezer?: string; // e.g., "3 ay", "Dondurulmaz"
    tips?: string; // Extra storage tips
}

export interface Recipe {
    id: string;
    title: string;
    description: string;
    image: string;
    prepTime: number; // in minutes
    cookTime: number; // in minutes
    servings: number; // base servings
    cuisine: string; // e.g., 'Türk', 'İtalyan', 'Fransız'
    ingredients: Ingredient[];
    steps: Step[]; // Keep for backward compatibility or default method
    cookingMethods?: CookingMethod[]; // New detailed methods
    rating: number;
    ratingCount: number;
    category: string;
    storage?: StorageInfo; // Storage conditions
}
