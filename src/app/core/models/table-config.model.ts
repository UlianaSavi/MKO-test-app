export interface ITableConfig {
  type: string,
    content: {
      columns: Icolumn[]
    },
}

export interface Icolumn {
  title: string,
  isVisible: string,
  type: string,
  color: string
}

