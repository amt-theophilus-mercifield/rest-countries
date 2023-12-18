
// interface Props {

import { Link } from "react-router-dom";
import styled from "styled-components";

// }

export const Error = () => {
  return (
    <div>
      <h1 className="font-bold tracking-wide flex items-center justify-center text-center h-screen text-4xl">
        oops.. Page not found!
      </h1>
      <Link to= '/'><StyledBtn className="styledBtn px-8 py-2 mt-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 rounded shadow-md">&larr; Back</StyledBtn></Link>
    </div>
  );
};

const StyledBtn = styled.button``
