interface IBaseLayoutProps {
    children?: React.ReactNode;
}

interface IBaseLayout<P> extends React.FC<P> {
    defaultProps?: Partial<P>;
}
