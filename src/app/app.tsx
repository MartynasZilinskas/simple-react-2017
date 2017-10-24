import * as React from "react";

interface Props {
    items: string[]
}

export class App extends React.Component<Props> {
    render() {
        return this.props.items.map(item => <div key={`my-item-${item}`}>
            {item}
        </div>)
    }
}
