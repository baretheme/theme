export interface Site {
  title: string,
  defaultLanguage: string,
  description: string,
  logo: string,
  collections: Collection[],
  languages: Language[]
}

export interface Collection {
  id: string,
  title: string
}

export interface Language {
  code: string,
  label: string
}

export interface DocumentVersion extends Version {
  $url: string,
}

export interface Document {
  $parent?: Document,
  id: string,
  title: string,
  draft: boolean,
  createdAt: string,
  updatedAt: string,
  collections: string[]
  versions: DocumentVersion[],
}

export interface Version {
  draft: boolean,
  slug: string,
  language: string,
  title: string,
  blocks: Block[]
}

export interface VersionDictionary {
  [key: string]: Version
}

export interface Block {
  block: string
}
