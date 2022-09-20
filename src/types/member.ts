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

export interface SimpleProfileType {
  homeId: number;
  memberImg: string;
  name: string;
  bio: string;
}

export type SimpleProfileListType = SimpleProfileType[];

export interface SignUpType {
  name: string;
  homeId: string;
}

export interface UpdateMyProfileType {
  name: string;
  bio: string;
}

export interface HomeIdType {
  homeId: string;
}
