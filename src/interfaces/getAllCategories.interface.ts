export interface getAllCategories {
  results: number
  metadata: Metadata
  data:getAllCategoriesData[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface getAllCategoriesData{
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
