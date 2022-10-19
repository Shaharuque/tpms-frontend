export const EVENTS = [
  {
    event_id: 1,
    title: "Event 1",
    age: 12,
    gender: "male",
    start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    disabled: true,
    admin_id: [1, 2, 3, 4],
  },
  {
    event_id: 2,
    title: "Event 2",
    age: 12,
    gender: "male",
    start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    admin_id: 2,
    color: "#50b500",
  },
  {
    event_id: 3,
    title: "Event 3",
    age: 12,
    gender: "male",
    start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    admin_id: 1,
    editable: false,
    deletable: false,
    color: "#b58b00",
  },
  {
    event_id: 233,
    title: "MEwao",
    age: 12,
    gender: "female",
    start: new Date(new Date(new Date().setHours(17)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(18)).setMinutes(0)),
    name: "cat",
    color: "#00a0b5",
  },
  {
    event_id: 4,
    title: "Event 4",
    age: 12,
    gender: "female",
    start: new Date(
      new Date(new Date(new Date().setHours(9)).setMinutes(30)).setDate(
        new Date().getDate() - 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
    admin_id: 2,
    color: "#900000",
  },
  {
    event_id: 5,
    title: "Event 5",
    age: 16777,
    gender: "female",
    start: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
        new Date().getDate() - 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
    admin_id: 2,
    editable: true,
  },
  {
    event_id: 6,
    title: "Event 6",
    age: 12,
    gender: "female",
    start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    admin_id: 2,
  },
  {
    event_id: 8,
    title: "cow",
    age: 60,
    gender: "female",
    start: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(15)).setMinutes(0)),
  },
];
