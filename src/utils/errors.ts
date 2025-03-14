import { AuthError } from "next-auth";

export class CustomAuthError extends AuthError{
    static type: string;

    constructor(message?: any) {
        super();
        this.type = message;
    }
}

export class InvalidEmailPasswordError extends AuthError {
    static type = "Email/password is not define"
}

export class InactiveAccountError extends AuthError {
    static type = "account is not active"
}