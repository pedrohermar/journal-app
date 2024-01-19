import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingAuthentication, checkingCredentials, login, logout, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth"
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');


describe('Pruebas en AuthThunks', () => { 

    const dispatch = jest.fn();
    beforeEach( () => jest.clearAllMocks() );

    test('Debe invocar el chkeckingCredentials', async() => { 
        
        await checkingAuthentication()( dispatch );   
        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());

     })

     test('startGoogleSignIn debe llamar el checkingCredentials y login - OK', async() => { 

        const loginData = { ok: true, ...demoUser };
        await singInWithGoogle.mockResolvedValue( loginData );

        // thunk
        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login(loginData) )

     })

     test('startGoogleSignIn debe llamar el checkingCredentials y logout - Error', async() => { 

        const loginData = { ok: false, errorMessage: "Hubo un error en la autenticación" };
        await singInWithGoogle.mockResolvedValue( loginData );

        // thunk
        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage) )

     })

     test('startLoginWithEmailPassword debe llamar el checkingCredentials y login - OK', async() => { 

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: "123456" }

        await loginWithEmailPassword.mockResolvedValue( loginData )

        // thunk
        await startLoginWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

      })

      test('startLoginWithEmailPassword debe llamar el checkingCredentials y logout - Error', async() => { 

        const loginData = { ok: false, errorMessage: "Error de credenciales" };
        const formData = { email: demoUser.email, password: "123456" }

        await loginWithEmailPassword.mockResolvedValue( loginData )

        // thunk
        await startLoginWithEmailPassword( formData )( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );

      })

      test('startLogout debe llamar logoutFirebase, clearNotes y logout', async() => { 

        await startLogout()(dispatch);

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );

       })

 })