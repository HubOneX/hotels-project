import { RoomData } from "../types/HotelTypes";

export const roomsMockArray: RoomData[] = [
  {
    id: "R01",
    name: "Standard Room",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Erat enim res aperta. ",
    occupancy: { maxAdults: 2, maxChildren: 2, maxOverall: 4 },
  },
  {
    id: "R02",
    name: "Deluxe Suite",
    longDescription:
      "Idque testamento cavebit is, qui nobis quasi oraculum ediderit nihil post mortem ad nos pertinere? Et nemo nimium beatus est; Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos.",
    occupancy: { maxAdults: 2, maxChildren: 0, maxOverall: 2 },
  },
  {
    id: "R03",
    name: "Capsule Room",
    longDescription:
      "Qua ex cognitione facilior facta est investigatio rerum occultissimarum. Quis istum dolorem timet? Beatus sibi videtur esse moriens. Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius.",
    occupancy: { maxAdults: 1, maxChildren: 0, maxOverall: 1 },
  },
];
