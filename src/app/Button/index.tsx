import * as React from "react";

export type ButtonType = "danger" | "info" | "warning" | "success" | "primary" ;

export interface IBtnProps {
    type: ButtonType;
    onClick?: () => {};
}

/**
 * Implement Bootstrap button react component by Typescript.
 * For the client project who used this, just add bootstrap CSS thus will work.
 */
export class Button extends React.Component<IBtnProps, any> {

    public render() {
        const {type, onClick, children} = this.props;
        return (
            <button onClick={onClick} type="button" className={`btn btn-${type}`}>{children}</button>
        );
    }
}
