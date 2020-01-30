import './sass/main.scss';

import BodyInteraction from './app/Interaction/Body';
import SkinColor from './app/Interaction/SkinColor';

import Head from './app/Body/Head';
import Body from './app/Body/Body';
import Submenu from './app/Submenu';

// Set the body parts first to render
let headPart = new Head();
let bodyPart = new Body();

let bodyInteract = new BodyInteraction();
let skinColorInteract = new SkinColor();

let Navigator = new Submenu();
