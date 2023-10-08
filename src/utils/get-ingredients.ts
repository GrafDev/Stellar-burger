import { IIngridient } from "./types";

export interface IIngridientWithCount {
    ingridient: IIngridient;
    count: number;//TODO непонятная фигня
}

type TPrev = {
    [name: string]: IIngridientWithCount;
};

export const getFullOrderIngridients = (
    ingredients: string[],
    fullIngridients: IIngridient[]
) => {
    return ingredients.map((i) => {
        if (!i) return null;
        const fullIngridient = fullIngridients.find((globalIngridient) => {
            return globalIngridient._id === i;
        });
        if (!fullIngridient) throw new Error(`ingrident is not found: ${i}`);
        return fullIngridient;
    }) as IIngridient[];
};

export const getIngridientsWithCount = (fullIngridients: IIngridient[]) => {
    let totalPrice = 0;
    const ingridientsWithCount = fullIngridients.reduce(
        (prev: TPrev, cur: IIngridient) => {
            // считает общую сумму ингридиентов
            // eslint-disable-next-line react-hooks/exhaustive-deps
            totalPrice += cur.price;
            //
            if (prev[cur._id])
                return {
                    ...prev,
                    [cur._id]: { ...prev[cur._id], count: prev[cur._id].count + 1 },
                };
            return { ...prev, [cur._id]: { ingridient: cur, count: 1 } };
        },
        {}
    );
    return {
        ingridientsWithCount: Object.values(ingridientsWithCount),
        totalPrice,
    };
};

