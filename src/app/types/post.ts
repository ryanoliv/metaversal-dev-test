export interface Post {
  id: number;
  userId: number;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
}
