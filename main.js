import React from 'react';
import {render} from 'react-dom';
import { store, router as routerConfig }  from './router';
import { Provider } from 'react-redux';

render(<Provider store={store}>{routerConfig}</Provider>,
document.getElementById('root'));


