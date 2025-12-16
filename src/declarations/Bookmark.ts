export interface Bookmark {
  id: string;
  createdAt: number;
  updatedAt: number;
  title: string;
  description: string;
  links: string[];
  tags: string[];
}
