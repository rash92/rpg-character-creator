import * as React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body);

function Test(){
    return <div>Hello from functional component</div>
}

function App(){
    return <Test/>
}

root.render(<App/>);
