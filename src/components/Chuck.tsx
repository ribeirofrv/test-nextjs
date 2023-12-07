import Image from "next/image";
import { useState } from "react";

type ApiResponse = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

export default async function Chuck() {
  const [joke, setJoke] = useState({ icon: "", string: "" });
  //   const Action = async (): Promise<void> => {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // try {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`, {
    method: "GET",
    next: { revalidate: 30 },
  });

  if (!response.ok) {
    throw new Error("Erro na requisição");
  }

  const data: ApiResponse = await response.json();

  setJoke({ icon: data.icon_url, string: data.value });
  // } catch (error) {
  //   console.error("Erro na chamada da API:", (error as Error).message);
  // }
  //   };

//   const handleButtonClick = async () => {
//     await Action();
//   };
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <h1 className="text-4xl font-bold mb-10">Piadoca do Chuck Norris</h1>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <p className="text-slate-400 text-base">{joke.string}</p>
        <Image
          src={joke.icon}
          alt="icon-chuck-norris"
          className="w-10 h-10 rounded-full mr-4"
          height="10"
          width="10"
        />
      </div>
    </>
  );
}
