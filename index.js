//*---------------------------------------- Ejercicio 1 --------------------------------------
const results = [
  { q1: 1, q2: 2, q3: 3 },
  { q1: 5, q2: 3, q3: 8 },
  { q1: 3, q2: 2, q3: 5 },
];
const ejercicio1 = results.map((obj) => {
  return {
    ...obj,
    total: obj.q1 + obj.q2 + obj.q3,
  };
});
console.log(ejercicio1);

//*---------------------------------------- Ejercicio 2 --------------------------------------
const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      ,
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 2,
    name: "Morty Smith",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 3,
    name: "Summer Smith",
    episode: [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 4,
    name: "Beth Smith",
    episode: [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 5,
    name: "Jerry Smith",
    episode: [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/42",
      "https://rickandmortyapi.com/api/episode/43",
      "https://rickandmortyapi.com/api/episode/44",
      "https://rickandmortyapi.com/api/episode/45",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    episode: ["https://rickandmortyapi.com/api/episode/27"],
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    episode: [
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
    ],
  },
  {
    id: 8,
    name: "Adjudicator Rick",
    episode: ["https://rickandmortyapi.com/api/episode/28"],
  },
  {
    id: 9,
    name: "Agency Director",
    episode: ["https://rickandmortyapi.com/api/episode/24"],
  },
  {
    id: 10,
    name: "Alan Rails",
    episode: ["https://rickandmortyapi.com/api/episode/25"],
  },
];

const ejercicio2 = characters.map(({ id, name, episode }) => {
  const episodesId = episode
    .reduce(
      (prevValue, currentValue) => prevValue.concat(currentValue.match(/\d+/)),
      []
    )
    .join(", ");
  return {
    id,
    name,
    episodesId,
  };
});
console.log(ejercicio2);

//*---------------------------------------- Ejercicio 3 --------------------------------------
const fetchA = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hola"), 4000);
  });
};

const fetchB = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Mundo"), 4000);
  });
};

const ejercicio3Promises = () => {
  const promisesResolved = fetchA().then((resA) => {
    return fetchB().then((resB) => {
      console.log(`${resA} ${resB}`);
    });
  });
  return promisesResolved;
};

const ejercicio3AsyncAwait = async () => {
  const promise1 = await fetchA();
  const promise2 = await fetchB();
  const promises = await Promise.all([promise1, promise2]);
  console.log(promises.join(" "));
};
console.log(ejercicio3Promises());
console.log(ejercicio3AsyncAwait());

//*---------------------------------------- Ejercicio 4 --------------------------------------
const fetchUrls = (quantity = 10) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const urls = [];
      for (let i = 0; i < quantity; i++) {
        urls.push(`http://${i}`);
      }
      resolve(urls);
    }, 3000);
  });
};

const fetchUrl = (url) => {
  const id = url.replace("http://", "");
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Hola ${id}`), 1000);
  });
};

const urlsAsyncAwait = async () => {
  const urls = await fetchUrls(25);
  const urlGreetings = urls.map(async (url) => await fetchUrl(url));
  const greetings = await Promise.all(urlGreetings);
  console.log(greetings.join(", "));
};
console.log(urlsAsyncAwait());
