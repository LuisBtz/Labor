import React from "react";
import styled from "styled-components";

const BodyTextModule = () => {
  return (
    <BodyTextWrapper>
      <h5 className="bold">
        At solmen va esser necessi far uniform grammatica, pronunciation e plu
        sommun paroles
      </h5>
      <p>
        An index and its settings (Un índice y sus entornos) se presenta en
        LABOR, como parte de una investigación en curso basada en la colección
        Proctor Stafford, un conjunto de 235 figuras y vasijas de cerámica (ca.
        200 AEC – 500 EC) de las costas del Pacífico de México, de las ciudades
        de Colima, Nayarit y Jalisco, que hoy en día forman parte de la
        colección de Los Angeles County Museum Museum of Art (LACMA). El
        proyecto se divide en los nombres de los tres estados y aborda las
        estipulaciones sobre la nomenclatura de la colección, su procedencia y
        las historias que se construyen a partir de la información disponible.
      </p>
    </BodyTextWrapper>
  );
};

const BodyTextWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;

  p {
    width: 50%;
    padding: 0 0.5rem;
    line-height: 140%;
  }

  h5 {
    width: 25%;
    padding: 0 0.5rem;

    @media screen and (max-width: 980px) {
      width: 35%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    p,
    h5 {
      width: 100%;
      margin: 0.5rem 0;
    }
  }
`;

export default BodyTextModule;
