import { API_HOST } from "@/global";
const API_URL: string = `${API_HOST}/api/v1`;
export const DEPARTMENT_ENDPOINT: string = `${API_URL}/route/departments/`;
export const AUTHENTICATION_ENDPOINT: string = `${API_URL}/rest-auth/login/`;
export const LOGOUT_ENDPOINT: string = `${API_URL}/rest-auth/logout/`;
export const USER_ENDPOINT: string = `${API_URL}/user/`;
export const COURSE_ENDPOINT: string = `${API_URL}/route/courses/`;
export const QUESTION_ENDPOINT: string = `${API_URL}/route/questions/`;