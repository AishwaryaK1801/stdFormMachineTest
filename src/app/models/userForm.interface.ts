export interface IMoc {
    moc : string,
    id : number
}

export interface IuserInfo {
    username: string;
    email: string;
    secretQuestion: string;
    ans: string;
    isSubscribed: string;
    userGender: string;
    modeOfContacrt: string;
}

export interface INestedUsernameEmail {
    
    usernameEmail: {
        username: string;
        email: string;
    };
    password: string;
    secretQuestion: string;
    ans: string;
    isSubscribed: string;
    userGender: string;
    modeOfContacrt: string;

}