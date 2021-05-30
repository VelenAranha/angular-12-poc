export interface SearchResult {
  login: string
  id: number
}

export interface UserSearchResults {
  total_count: number
  incomplete_results: boolean
  items: SearchResult[]
}
