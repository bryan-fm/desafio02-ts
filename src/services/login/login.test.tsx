import { LoginStatusEnum } from "../../Enums/LoginStatusEnum";
import { Login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    // const mockUser = {};
    // const mockSetUserState = jest.fn();
    // const mockClearUser = jest.fn();
    // const mockLoggedIn = false;

    // jest.mock('react', () => ({
    //     ...jest.requireActual('react'),
    //     useContext: () => ({
    //         user: {},
    //         setUserState: jest.fn(),
    //         clearUser: jest.fn(),
    //         loggedIn: false,
    //     })
    // }))

    const email = 'mock@mock.com.br';

    it('Deve exibir um alert com boas vindas', async () => {
        const response = await Login(email, 'test');
        expect(response).toEqual({
            status: LoginStatusEnum.SUCCESS,
            user: {
              id: "2",
              name: "Bryan",
            },
        })
    });

    it('Deve exibir um alert pedindo login e senha', async () => {
        const response = await Login('', '');
        expect(response).toEqual({status: LoginStatusEnum.REQUIRED_FIELDS})
    });

    it('Deve exibir um alert informando que os dados estão errados', async () => {
        const response = await Login('aaa', 'bbb');
        expect(response).toEqual({status: LoginStatusEnum.INCORRECT_CREDENTIALS})
    });
})