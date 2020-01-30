import './sass/main.scss';

import BodyInteraction from './app/Interaction/Body';
import SkinColor from './app/Interaction/SkinColor';
import Head from './app/Body/Head';

// Set the body parts first to render
let headParts = new Head();

let bodyInteract = new BodyInteraction();
let skinColorInteract = new SkinColor();

// Stylesheets