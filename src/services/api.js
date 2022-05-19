import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

/** @param {number[]}  list */
export const getSpecificCharacters = (list) =>
  axiosInstance.get(`character/${list}`).then((response) => {
    const formattedResponde = response.data.map((character) => ({
      nome: character.name,
      genero: character.gender === "Male" ? "Homem" : "Mulher",
      avatar: character.image,
      especie: character.species === "Human" ? "Humano" : "Alienígena",
    }));

    return formattedResponde;
  });
