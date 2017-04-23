/// <reference types="react" />
import * as React from "react";
export declare type BtnType = "danger" | "info" | "warning" | "success" | "primary";
export interface IBtnProps {
    type: BtnType;
    onClick?: any;
}
export declare class Button extends React.Component<IBtnProps, any> {
    render(): JSX.Element;
}
