export default async function getJoke(jokeId: string) {
  const res = await fetch(`https://retoolapi.dev/zu9TVE/joke/${jokeId}`);

  if (!res.ok) throw new Error("failed to fetch all jokes data");

  return res.json();
}
