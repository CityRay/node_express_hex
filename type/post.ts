export interface PostModel {
  name: string;
  title: string;
  content: string;
  description: string;
  tag: string[];
  image: string;
  likes: number;
  comments: number;
  isPublic: boolean;
}

export interface PostResult extends PostModel {
  _id: string;
}
