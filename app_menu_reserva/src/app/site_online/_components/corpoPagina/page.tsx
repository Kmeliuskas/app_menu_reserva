import { ReactNode } from "react";

interface PropsCorpoPagina  {
  children: ReactNode
  className?: any
}

export default function CorpoPagina(props: PropsCorpoPagina) {
    return (
        <div>
            {props.children}
        </div>
    )
}