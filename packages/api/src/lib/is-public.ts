interface Filterable {
  draft: boolean
}

export const isPublic = (obj: Filterable) => !obj.draft;
