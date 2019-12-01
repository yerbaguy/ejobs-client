export interface Categories {
    categories_id: number;
    categoriesName: string;
    subCategories: SubCategory[];
    id: number;
  }
  
export interface SubCategory {
    id: number;
    subCatName: string;
  }