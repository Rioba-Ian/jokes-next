import Image from "next/image";
import getAllJokes from "@/lib/getAllJokes";
import Link from "next/link";
import Example from "./jokesTable";

export default async function Home() {
  const jokesData: Promise<Joke[]> = getAllJokes();

  const jokes = await jokesData;

  const content = <section>{<Example data={jokes} />}</section>;
  return <main>{content}</main>;
}
