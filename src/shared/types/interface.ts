export interface IPagination {
  current_page: number
  total_page: number
  per_page: number
  total_items: number
  next_url: string
}

export interface IPaginatedItems<T> {
  items: T[]
  pagination: IPagination
}
