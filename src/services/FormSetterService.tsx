export class FormSetterService{

    //Can parse a generic class to set a varable based on a class. naming convention
    /*
        Ex.)
        var BaseClass = {
            Class{
                var1: foo,
                var2: bar
            }
            var3: fi
        }

        to set  var1, you would pass (Class1.var1, newfoo, BaseClass);
    */
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

    // Recursive function to flatten nested objects and get all boolean values
    /*
        ex.)
        {
            class{
                var1: true,
                var2: false
            },
            true,
            false
        }
        will become:
        {
            true,
            false,
            true,
            false
        }
    */
    public static getAllBooleanValues(obj: Object): Object{
        return Object.values(obj).flatMap(value => {
            if (typeof value === 'object') {
                return this.getAllBooleanValues(value); // Recursively get values if object
            }
            return value;
        });
    };

    // Splits any string into two parts based on the first . found
    // If none is found it returns the whole variable
    // Ex.)     Test.var1       --->    [Test, var1]
    //          Test.Class.var1 --->    [Test, Class.var1]
    //          Test            --->    [Test]
    private static getFirstSplit(variableName: string): string[] {
        const dotIndex = variableName.indexOf('.');
        if (dotIndex === -1) {
            return [variableName];
        }
        return [variableName.substring(0 , dotIndex), variableName.substring(dotIndex + 1)];
    }
    
}