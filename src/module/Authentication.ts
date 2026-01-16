import { gmail } from '../models/account';

const Authenticate = (data = [], { gmail, password } = {}) => {
    let authUser = null;

    data.forEach(user => {
        if (user.gmail === gmail && user.password === password) {
            authUser = new gmail(user);
            return;
        }
    });

    return authUser;
};

export { Authenticate };