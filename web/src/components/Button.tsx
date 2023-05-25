import { isInterfaceDeclaration } from "typescript"

const styles = {
    color: '#F00',
}

interface ButtonProps {
    title: string
}

export function Button(props) {
    return (
        <p style={styles}>
            {props.title}
        </p>
    )
}