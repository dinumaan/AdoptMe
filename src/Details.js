// const Details = () => {
//     return <h2>Hi !</h2>
// };

// export default Details;

import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;