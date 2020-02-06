export function generateAuthHeader(token: string | null) {
    if (token == null) {
        return {};
    }
    return {
        headers: {
            Authorization: `Token ${token}`
        }
    };
}