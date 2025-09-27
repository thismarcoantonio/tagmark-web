export interface Bookmark {
  id: number;
  createdAt: number;
  updatedAt: number;
  title: string;
  description: string;
  links: string[];
  tags: string[];
}
