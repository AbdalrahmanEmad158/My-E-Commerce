export interface getAllSubCategories {
  results: number
  metadata: Metadata
  data: SubCategoriesData[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface SubCategoriesData {
  _id: string
  name: string
  slug: string
  category: string
  createdAt: string
  updatedAt: string
}
