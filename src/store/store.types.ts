export interface RootState {
    version: string;
    [key: string]: any;
}

export interface Params {
    [key: string]: any;
    [key: number]: any;
}

export interface Profile {
    id: number;
    department: any;
    session: string;
}

export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    full_name: string;
    image: string;
    last_login: string;
    groups: any;
    uprofile: Profile;
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