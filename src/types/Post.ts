

export type Post = {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string;
  createdAt: Date;
  updatedAt?: Date;  
};
