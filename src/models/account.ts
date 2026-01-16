interface IGmail {
    gmail: string;
    password: string;
    isRememberMe: boolean;
}

export class gmail {    
    gmail: string;
    password: string; 
    isRememberMe: boolean;
    
    constructor({gmail, password, isRememberMe}: IGmail) {
        this.gmail = gmail;
        this.password = password;
        this.isRememberMe = isRememberMe;
    }

    authenticate() {
        // Authentication logic here
        console.log(`Authenticating user: ${this.gmail}`);
    }
}   