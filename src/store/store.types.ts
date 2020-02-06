export interface RootState {
    version: string;
    [key: string]: any;
}

export interface Params {
    [key: string]: any;
    [key: number]: any;
}

export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    full_name: string;
}

export interface AuthState {
    token: string | null;
    user: User | null;
    accessLevel: number | null;
    error: boolean;
}

export interface AuthCredential {
    username: string;
    password: string;
}

export interface PublicDataState {
    departments: any;
    error: boolean;
}