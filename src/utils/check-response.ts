export const checkResponse = (res: Response) => {
    return res.ok
        ? res.json()
        : res.json().then((error: any) => Promise.reject(error));
};
