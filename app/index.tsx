import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./index.css";
import ReactElement = __React.ReactElement;

class App extends React.Component<{}, {}> {
    public render(): any {
        return (
            <p>
                Test
            </p>
        )
    }
}

console.log(document.getElementById("appMount"));

ReactDOM.render(
    <App/>,
    document.getElementById("appMount")
);
