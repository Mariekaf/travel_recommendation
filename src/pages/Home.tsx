import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import type { TravelData } from "./type";
import type { SearchResult } from "../types/Search";

export function Home() {
  const [data, setData] = useState<TravelData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Impossible de charger les données");
        }

        const json: TravelData = await response.json();
        setData(json);
      } catch (err) {
        setError((err as Error).message);
      } 
    };

    fetchData();
  }, []);

 

  const getAllDestinations = (): SearchResult[] => {
    if (!data) return [];

    const cities = data.countries.flatMap(country =>
      country.cities.map(city => ({
        name: city.name,
        type: city.description ,
        img: city.imageUrl,
      }))
    );
 
    const temples = data.temples.map(temple => ({
      name: temple.name,
      type: temple.description,
      img: temple.imageUrl,
    }));

    const beaches = data.beaches.map(beach => ({
      name: beach.name,
      type: beach.description,
      img: beach.imageUrl,
    }));

    return [...cities, ...temples, ...beaches];
  };


  const filteredResults = search
    ? getAllDestinations().filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    : [];

  return (
    <Layout search={search} setSearch={setSearch} filteredResults={filteredResults}>
      {/* HERO SECTION */}
      <div className="w-full h-[calc(100vh-80px)] flex items-center px-4 md:px-24 relative">
        <div className="absolute hidden w-1 left-10 md:left-20 top-1/3 bottom-1/3 bg-white/80 md:block"></div>

        <div className="max-w-4xl ml-0 text-white md:ml-12">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-wide uppercase md:text-7xl">
            Explore
            <br />
            Dream
            <br />
            Destination
          </h1>

          <p className="max-w-2xl mb-10 text-lg leading-relaxed text-gray-200 md:text-xl">
            It encourages exploration of unfamiliar territories, embracing
            diverse cultures and landscapes.
          </p>

          <button className="bg-[#0d9488] hover:bg-teal-700 text-white text-lg font-bold py-3 px-8 rounded shadow-lg transition-all transform hover:scale-105 uppercase tracking-wider">
            Book Now
          </button>
        </div>
      </div>    

      {/* DATA SECTION
      <div className="px-4 py-16 md:px-24">
        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-500">Erreur : {error}</p>}

        {data && (
          <>
            <h1 className="mb-6 text-3xl font-bold">🌍 Pays</h1>
            {data.countries.map(country => (
              <div key={country.id} className="mb-6">
                <h2 className="text-2xl font-semibold">{country.name}</h2>

                {country.cities.map(city => (
                  <div key={city.name} className="mt-2 ml-4">
                    <h3 className="font-medium">{city.name}</h3>
                    <p className="text-gray-600">{city.description}</p>
                  </div>
                ))}
              </div>
            ))}

            <h1 className="mt-10 mb-6 text-3xl font-bold">🏯 Temples</h1>
            {data.temples.map(temple => (
              <div key={temple.id}>
                <h3>{temple.name}</h3>
                <p>{temple.description}</p>
              </div>
            ))}

            <h1 className="mt-10 mb-6 text-3xl font-bold">🏖️ Plages</h1>
            {data.beaches.map(beach => (
              <div key={beach.id}>
                <h3>{beach.name}</h3>
                <p>{beach.description}</p>
              </div>
            ))}
          </>
        )}
      </div> */}
    </Layout>
  );
}
