export interface UserCardProps {
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string;
  variant?: "detailed" | "simple"; // variant prop to differentiate layouts
  showFollowButton?: boolean;
  tags?: string[];
  likeCount?: number;
  shareCount?: number;
  viewCount?: number;
}
