import * as React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body);

function Test({text}){
    text = text + "!"

    return <div>{text}</div>
}

function App(){
    return <Test text="hello from functional component"></Test>
}

root.render(<App/>);
