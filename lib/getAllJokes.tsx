export default async function getAllJokes() {
  const res = await fetch("https://retoolapi.dev/zu9TVE/jokes");

  if (!res.ok) throw new Error("failed to fetch all jokes data");

  return res.json();
}
