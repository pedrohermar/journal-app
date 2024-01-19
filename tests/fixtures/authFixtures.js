export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const authenticatedState = {
    status: 'authenticathed',
    uid: "123ABC",
    email: "correo@correo.com",
    displayName: "Demo User",
    photoURL: "http://demo.jpg",
    errorMessage: null,
};

export const notAuthenticatedState = {
    status: "not-authenticated",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const demoUser = {
    uid: "ABC123",
    email: "correo@correo.com",
    displayName: "Demo User",
    photoURL: "http://demo.jpg",
};