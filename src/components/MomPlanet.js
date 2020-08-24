import React from 'react'
import { Planet } from 'react-planet';
import PlanetMomButton from './PlanetMomButton';
import OrbitMom from './OrbitMom';

const MomPlanet = () => {
    return (
        <div id="mom-planet">
        <Planet
            mass={2}
            tension={500}
            friction={19}
            dragablePlanet
            dragRadiusPlanet={20}
            centerContent={<PlanetMomButton />}
            hideOrbit
            autoClose
            orbitRadius={370}
            bounceOnClose
            rotation={270}
            // the bounce direction is minimal visible
            // but on close it seems the button wobbling a bit to the bottom
            bounceDirection="BOTTOM"
        >
            <OrbitMom />
        </Planet>
        </div>
    )
}

export default MomPlanet
