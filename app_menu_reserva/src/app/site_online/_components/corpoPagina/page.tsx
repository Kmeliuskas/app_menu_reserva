import { ReactNode } from "react";

interface PropsCorpoPagina  {
  children: ReactNode
}

export default function CorpoPagina(props: PropsCorpoPagina) {
    return (
        <div>
            {props.children}
        </div>
    )
}