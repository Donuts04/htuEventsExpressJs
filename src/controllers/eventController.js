let events = [
  {
    id: 1,
    title: "React Session",
    clubName: "GDG Club",
    date: "22/02/2024 Monday",
    time: "From 10:00 AM to 12:00 PM",
    location: "W-002",
    description:
      "Intro to React - Learn the fundamentals of React.js, component-based architecture, and how to build interactive UIs. This session is perfect for beginners who want to start their journey with modern frontend development.",
    imageSrc: "/cat.jpeg",
  },
];

exports.getAllEvents = (req, res) => {
  res.json(events);
};

exports.getEventById = (req, res) => {
  const event = events.find((e) => e.id === Number.parseInt(req.params.id));
  if (!event) return res.status(404).json({ error: "Event not found" });
  res.json(event);
};

exports.createEvent = (req, res) => {
  const newEvent = {
    id: events.length > 0 ? Math.max(...events.map((e) => e.id)) + 1 : 1,
    ...req.body,
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
};

exports.deleteEvent = (req, res) => {
  const eventId = Number.parseInt(req.params.id);
  const initialLength = events.length;
  events = events.filter((e) => e.id !== eventId);

  if (events.length === initialLength) {
    return res.status(404).json({ error: "Event not found" });
  }

  res.json({ message: "Event deleted successfully" });
};
