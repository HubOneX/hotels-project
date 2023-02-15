import { HotelData } from "../types/DataTypes";
import { roomsMockArray } from "./roomsMockArray";

export const hotelsMockArray: HotelData[] = [
  {
    id: "H01",
    hotelName: "Hotel 1",
    hotelAddressFirstLine: "Gdansk",
    hotelAddressSecondLine: "al. Grunwaldzka",
    starRating: 4,
    images: [{ url: "url", alt: "alt" }],
    roomsData: roomsMockArray,
  },
  {
    id: "H02",
    hotelName: "Second Hotel",
    hotelAddressFirstLine: "Warsaw",
    hotelAddressSecondLine: "ul. Gdanska",
    starRating: 1,
    images: [{ url: "url", alt: "alt" }],
    roomsData: roomsMockArray,
  },
  {
    id: "H03",
    hotelName: "Motel la Venturas",
    hotelAddressFirstLine: "Lloret de Mar",
    hotelAddressSecondLine: "First Avenue",
    starRating: 3,
    images: [{ url: "url", alt: "alt" }],
    roomsData: [
      ...roomsMockArray,
      {
        id: "R04",
        name: "Loft Apartament",
        longDescription:
          "Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius.",
        occupancy: { maxAdults: 2, maxChildren: 4, maxOverall: 6 },
      },
    ],
  },
];
