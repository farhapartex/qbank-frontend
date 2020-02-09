import { Params } from "../store/store.types";

export function buildQueryParams(params: Params): string {
    if (Object.keys(params).length === 0) {
        return "";
    }
    return (
        "?" +
        Object.keys(params)
            .map(key => {
                return `${key}=${encodeURI(params[key])}`;
            })
            .join("&")
    );
}