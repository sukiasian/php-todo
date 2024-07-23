interface DarkScreenProps {
    children: JSX.Element;
}

export default function DarkScreen({ children }: DarkScreenProps): JSX.Element {
    return <div className="dark-screen">{children}</div>;
}
