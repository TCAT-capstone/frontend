export interface ProfileType {
  id: number;
  name: string;
  bio: string;
  email: string;
  ticketCount: number;
  likeCount: number;
  memberImg: string;
  homeId: string;
}

export interface SignUpType {
  name: string;
  homeId: string;
}
