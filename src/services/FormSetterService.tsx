export class FormSetterService{

    public static setForm<T>(variableName: string, value: any, formClass: T): T {
        const keys = this.getFirstSplit(variableName);

        if (keys.length === 1) {
            return {
                ...formClass,
                [variableName]: value
            };
        }
        else {
            const [childClassName, childClassVariable] = keys;
            return {
                ...formClass,
                [childClassName]: {
                    ...this.setForm(childClassVariable, value, formClass[childClassName as (keyof (typeof formClass))])
                }
            };
        }
    }

    private static getFirstSplit(variableName: string): string[] {
        const dotIndex = variableName.indexOf('.');
        if (dotIndex === -1) {
            return [variableName];
        }
        return [variableName.substring(0 , dotIndex), variableName.substring(dotIndex + 1)];
    }
}