import Image from "next/image";
import getAllJokes from "@/lib/getAllJokes";
import Link from "next/link";

export default async function Home() {
  const jokesData: Promise<Joke[]> = getAllJokes();

  const jokes = await jokesData;

  const content = <section>Jokes table</section>;
  return <main>{content}</main>;
}
