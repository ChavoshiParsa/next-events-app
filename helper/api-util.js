import axios from "axios";

const client = axios.create({
  baseURL:
    "https://nextjs-practice-40c65-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export async function getAllEvents() {
  const response = await client.get(`/events.json`);
  const data = response.data;

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
