import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import TextView from '@components/commons/TextView';

import { useSelector } from 'react-redux';
import { ReduxStates } from '@redux/reducers';

import { common, flexbox, input, choice, spacing } from '@assets/styles';
const styles = StyleSheet.create({
    ...input,
    ...spacing,
    ...common,
    ...flexbox,
    ...choice,
});

const Choice: IChoiceComponent<IChoiceComponentProps> = (props) => {
    const { type, data, valueSelected, disabled, onChange } = props;
    const { locale } = useSelector((states: ReduxStates) => states);
    const [state, setState] = useState<IChoiceComponentState>({
        value: valueSelected ?? [],
    });
    const { value } = state;

    useEffect(() => {
        setState((prevState) => ({ ...prevState, value: valueSelected ?? [] }));
    }, [valueSelected]);

    const handleSelect = (data: string) => {
        if (type === 'radio') {
            if (onChange) {
                onChange([data]);
            }
        }
    };

    const renderRadio = (item: IChoiceDataItem, index: number) => {
        return (
            <TouchableOpacity
                disabled={disabled}
                key={index}
                style={[styles.flexRow, locale === 'jp' ? styles.width_25Percent : styles.width_30Percent]}
                onPress={() => handleSelect(item.value)}
            >
                <View style={[styles.flexRow]}>
                    <View style={[styles.choice_radioStyle, disabled ? styles.choice_disabled : {}]}>
                        {value?.includes(item.value ?? 0) === true && <View style={[styles.choice_radioSelected]} />}
                    </View>
                    <TextView
                        style={[
                            styles.marginLeft8,
                            styles.marginTop20,
                            styles.font_size_13,
                            styles.alignSelfCenter,
                            styles.font_weight_regular,
                            disabled ? styles.choice_disabled : {},
                        ]}
                    >
                        {item.label}
                    </TextView>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            {data?.map((item, index) => {
                if (type === 'radio') {
                    return renderRadio(item, index);
                }
            })}
        </>
    );
};

Choice.defaultProps = {
    type: 'radio',
};

export default Choice;
