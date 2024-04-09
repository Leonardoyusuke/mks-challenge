import { ReactNode } from "react";

export interface cartInterface {
    cart: {
        qtd: any;
        price: ReactNode;
        photo: string | undefined;
        id: React.Key | null | undefined;
        name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
    }[];
    setCart: any;
}

export interface menuOpenInterface {
    isOpen: boolean;
    setIsOpen: any;
}