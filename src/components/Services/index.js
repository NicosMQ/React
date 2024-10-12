import React from "react";
import Icon1 from "../../images/hydrovactruck.png";
import Icon2 from "../../images/marineassetretrieval.png";
import Icon3 from "../../images/pipelineservices.jpeg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nos prestations</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Désembouage</ServicesH2>
          <ServicesP>
            Le désembouage est une opération clé pour maintenir un système de
            chauffage ou de refroidissement en bon état de fonctionnement,
            optimiser son rendement énergétique, et prolonger sa durée de vie en
            éliminant les dépôts de boues, de tartre, et autres impuretés qui
            peuvent s'accumuler dans le circuit hydraulique au fil du temps.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Détartrage</ServicesH2>
          <ServicesP>
            Le détartrage est une opération essentielle visant à éliminer le
            tartre, une accumulation de dépôts calcaires, dans les systèmes
            hydrauliques tels que les chauffe-eau, les chaudières, les circuits
            de chauffage, les ballons d'eau chaude et les circuits d'eau chaude
            sanitaire afin de maintenir l'efficacité et la durabilité des
            systèmes utilisant de l'eau. Il permet d'éviter les pannes, de
            réduire les coûts énergétiques et de prolonger la vie des
            équipements.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Désinfection</ServicesH2>
          <ServicesP>
            La désinfection de l'eau chaude sanitaire est un processus visant à
            éliminer les micro-organismes pathogènes, notamment les bactéries
            comme la légionelle, qui peuvent se développer dans les systèmes de
            production et de distribution d'eau chaude. La légionelle est
            particulièrement préoccupante car elle peut provoquer la
            légionellose, une maladie pulmonaire grave. C'est une mesure
            essentielle pour assurer la sécurité des utilisateurs et la
            conformité aux normes de santé.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
