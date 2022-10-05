import { createRoot } from 'react-dom/client'
import * as React from "react" 

import Welcome from './components/Welcome';
import '../main.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <Welcome occurences={23} />
);