export interface ListItem {
  value: string;
}

export interface ListState {
  values: ListItem[];
  filter: string;
}
