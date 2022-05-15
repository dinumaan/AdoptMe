import { useEffect, useState } from "react";
import Pet from "./Pet";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLoction] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = [];

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&locations=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLoction(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option></option>
            {ANIMALS.map((OneAnimal) => (
              <option kye={OneAnimal} value={OneAnimal}>
                {OneAnimal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option></option>
            {breeds.map((Onebreed) => (
              <option key={Onebreed} value={Onebreed}>
                {Onebreed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;

// import { useEffect, useState } from "react";
// import Pet from "./Pet";

// const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// const SearchParams = () => {
//   const [location, updateLocation] = useState("");
//   const [animal, updateAnimal] = useState("");
//   const [breed, updateBreed] = useState("");
//   const [pets, setPets] = useState([]);
//   const breeds = [];

  // useEffect(() => {
  //   requestPets();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // async function requestPets() {
  //   const res = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = await res.json();

  //   setPets(json.pets);
  // }

//   return (
//     <div className="search-params">
//       <form>
//         <label htmlFor="location">
//           Location
//           <input
//             id="location"
//             value={location}
//             placeholder="Location"
//             onChange={(e) => updateLocation(e.target.value)}
//           />
//         </label>
//         <label htmlFor="animal">
//           Animal
//           <select
//             id="animal"
//             value={animal}
//             onChange={(e) => {
//               updateAnimal(e.target.value);
//               updateBreed("");
//             }}
//             onBlur={(e) => {
//               updateAnimal(e.target.value);
//               updateBreed("");
//             }}
//           >
//             <option />
//             {ANIMALS.map((animal) => (
//               <option key={animal} value={animal}>
//                 {animal}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label htmlFor="breed">
//           Breed
//           <select
//             disabled={!breeds.length}
//             id="breed"
//             value={breed}
//             onChange={(e) => updateBreed(e.target.value)}
//             onBlur={(e) => updateBreed(e.target.value)}
//           >
//             <option />
//             {breeds.map((breed) => (
//               <option key={breed} value={breed}>
//                 {breed}
//               </option>
//             ))}
//           </select>
//         </label>
//         <button>Submit</button>
//       </form>
//       {pets.map((pet) => (
//         <Pet
//           name={pet.name}
//           animal={pet.animal}
//           breed={pet.breed}
//           key={pet.id}
//         />
//       ))}
//     </div>
//   );
// };

// export default SearchParams;
