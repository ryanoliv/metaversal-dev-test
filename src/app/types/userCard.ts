import { User } from "./user";
import { Post } from "./post";

export interface UserCardProps {
  user: User;
  post?: Post;
  variant?: "simple" | "detailed";
  showFollowButton?: boolean;
}
