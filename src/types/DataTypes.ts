export type HotelData = {
  id: string;
  hotelName: string;
  hotelAddressFirstLine: string;
  hotelAddressSecondLine: string;
  starRating: number;
  images: ImageWithAlt[];
  roomsData: RoomData[];
};

export type ImageWithAlt = {
  url: string,
  alt: string
}

export type RoomData = {
  id: string;
  name: string;
  longDescription: string;
  occupancy: Occupancy;
};

export type Occupancy = {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
};
