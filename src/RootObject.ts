export interface RootObject {
    categories_id: number;
    categoriesName: string;
    subCategories: SubCategory[];
    id: number;
  }
  
export interface SubCategory {
    id: number;
    subCatName: string;
  }