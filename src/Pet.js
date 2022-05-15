const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    // <div>
    //   <h1>{props.name}</h1>
    //   <h2>{props.animal}</h2>
    //   <h3>{props.breed}</h3>
    // </div>
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;
