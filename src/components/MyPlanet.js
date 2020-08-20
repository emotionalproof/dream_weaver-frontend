import React from 'react'
import { Planet } from 'react-planet';
import PlanetButton from './PlanetButton';
import OrbitHomeButton from './OrbitHomeButton';
import OrbitDreamsButton from './OrbitDreamsButton';
import OrbitLogout from './OrbitLogout';

const MyPlanet = () => {
    return (
        <div id="nav-planet">
        <Planet
            mass={2}
            tension={500}
            friction={19}
            dragablePlanet
            dragRadiusPlanet={20}
            centerContent={<PlanetButton />}
            hideOrbit
            autoClose
            orbitRadius={180}
            bounceOnClose
            rotation={240}
            // the bounce direction is minimal visible
            // but on close it seems the button wobbling a bit to the bottom
            bounceDirection="BOTTOM"
        >
            <OrbitHomeButton />
            <OrbitDreamsButton />
            <OrbitLogout />
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </Planet>
        </div>
    )
}

export default MyPlanet
