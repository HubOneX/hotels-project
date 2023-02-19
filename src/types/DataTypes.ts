export type Id<T = string> = {
  id: T;
};

export interface HotelData extends Id {
  hotelName: string;
  hotelAddressFirstLine: string;
  hotelAddressSecondLine: string;
  starRating: number;
  images: ImageWithAlt[];
  roomsData: RoomData[];
}

export type ImageWithAlt = {
  url: string;
  alt: string;
};

export interface RoomData extends Id {
  id: string;
  name: string;
  longDescription: string;
  occupancy: Occupancy;
}

export type Occupancy = {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
};
