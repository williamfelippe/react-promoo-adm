import Store from "store";

export const createUserStore = (data) => {
    const user = {
        _id: data.user._id,
        email: data.user.email,
        name: data.user.name,
        photo:data.user.photo,
        settings: data.user.setting,
        token: data.token
    };

    Store.set('admin', user);
};

export const getLoggedUserId = () => {
    const user = Store.get('admin');
    return (verifyIfExistUserInformationSaved(user)) ? user._id : -1;
};

export const getLoggedUserAvatar = () => {
    const user = Store.get('admin');
    return (verifyIfExistUserInformationSaved(user)) ? user.photo : null;
};

export const getLoggedUserName = () => {
    const user = Store.get('admin');
    return (verifyIfExistUserInformationSaved(user)) ? user.name : "";
};

export const getLoggedUserEmail = () => {
    const user = Store.get('admin');
    return (verifyIfExistUserInformationSaved(user)) ? user.email : "";
};

export const getLoggedUserToken = () => {
    const user = Store.get('admin');
    return (verifyIfExistUserInformationSaved(user)) ? user.token : "";
};

export const getLoggedUser = () => {
    const user = Store.get('admin');
    return (verifyIfExistUserInformationSaved(user)) ? user : null;
};

export const isLoggedIn = () => {
    const user = Store.get('admin');
    return (user && user !== undefined && user.admin);
};

export const clearUserStore = () => {
    Store.clear();
};

function verifyIfExistUserInformationSaved(user) {
    return (user && user !== undefined);
}