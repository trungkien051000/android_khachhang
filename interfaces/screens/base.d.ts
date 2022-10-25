interface IBaseScreenProps {
    children?: React.ReactNode;
    navigation?: {
        navigate: (routeName: string, params?: object) => void;
        goBack: () => void;
        openDrawer: () => void;
        push: (routeName: string, params?: any) => void;
    };
}

interface IBaseScreen<P> extends React.FC<P> {
    defaultProps?: Partial<P>;
}
