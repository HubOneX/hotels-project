export type HotelData = {
  id?: string;
  hotelName: string;
  hotelAddressFirstLine: string;
  hotelAddressSecondLine: string;
  starRating: number;
  roomsData: RoomData[];
};

export type RoomData = {
  id?: string;
  name: string;
  longDescription: string;
  occupancy: Occupancy;
};

export type Occupancy = {
  maxAdutls: number;
  maxChildren: number;
  maxOverall: number;
};
