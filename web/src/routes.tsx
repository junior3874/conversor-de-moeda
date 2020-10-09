import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Index from './pages/index';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Index} />
        </BrowserRouter>
    );
}
export default Routes;