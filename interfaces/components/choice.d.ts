interface IChoiceDataItem {
    value: string;
    label: string;
}

interface IChoiceComponentProps extends IBaseCompProps {
    type?: 'checkbox' | 'radio';
    data: IChoiceDataItem[];
    valueSelected?: string[];
    style?: object;
    disabled?: boolean;
    onChange?: (value: string[]) => void;
}

interface IChoiceComponent<P = {}> extends IBaseComp<P> {}

interface IChoiceComponentState {
    value: string[];
}
