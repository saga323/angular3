export interface IPost {
  id: number;
  userName: string;
  userImage: string;
  postImage: string;
  postDescription: string;
  liked?: boolean;
}
