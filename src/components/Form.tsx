import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    email: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ userId: "", name: "", email: "" });

    try {
      const response = await fetch(
        "https://yr8j9ksw09.execute-api.us-east-1.amazonaws.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
          body: JSON.stringify(formData),
          mode: "no-cors"
        }
      );

      // axios
      //   .post("https://yr8j9ksw09.execute-api.us-east-1.amazonaws.com/users")
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     throw error;
      //   });

      if (!response.ok) {
        console.log("Erro ao criar usuário");
        throw new Error("Erro ao criar usuário");
      }

      console.log("Usuário criado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="w-full max-w-xs">
      <h1 className="text-2xl mb-2 ml-1">Criação de usuário test</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="userId"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            User ID
          </label>
          <input
            type="text"
            name="userId"
            id="userId"
            placeholder="User ID"
            value={formData.userId}
            onChange={handleInputChange}
            autoComplete="off"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            autoComplete="off"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="rounded border-l-indigo-300 bg-indigo-400 px-4 py-2 font-bold text-white hover:bg-indigo-300"
        >
          Criar Usuário
        </button>
      </form>
    </section>
  );
}
