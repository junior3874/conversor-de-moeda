import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import index from './pages/index';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={index} />
        </BrowserRouter>
    );
}
export default Routes;