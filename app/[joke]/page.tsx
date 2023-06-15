import getJoke from "@/lib/getJoke";

type Params = {
  params: {
    jokeId: string;
  };
};

export default async function Joke({ params: { jokeId } }: Params) {
  const jokeData: Promise<Joke> = getJoke(jokeId);

  const joke = await jokeData;

  return <div>{JSON.stringify(joke)}</div>;
}
