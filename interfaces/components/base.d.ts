interface IBaseCompProps {
    children?: React.ReactNode;
    navigation?: {
        navigate: (routeName: string, params?: obj) => void;
        goBack: () => void;
    };
}

interface IBaseComp<P> extends React.FC<P> {
    defaultProps?: Partial<P>;
}
