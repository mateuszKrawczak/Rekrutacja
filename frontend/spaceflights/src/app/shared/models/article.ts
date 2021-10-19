export interface Article {
id: number;
featured: boolean;
default: false;
title:	string;
url: string;
imageUrl: string;
newsSite: string;
summary: string;
publishedAt: string;
launches: LaunchData[];
events: EventData[];
isFavourite?: boolean;
}

export interface LaunchData{
  id: string;
  provider: string;
}
export interface EventData{
  id: number;
  provider: string;
}
