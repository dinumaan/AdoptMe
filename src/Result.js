import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>"No Pets Found :("</h1>
      ) : (
        pets.map((onePet) => (
          <Pet
            animal={onePet.animal}
            key={onePet.id}
            name={onePet.name}
            breed={onePet.breed}
            images={onePet.images}
            location={`${onePet.city}, ${onePet.state}`}
            id={onePet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
