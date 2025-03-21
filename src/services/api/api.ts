export interface DataInterface {
    id: string;
    email: string;
    password: string;
    name: string;
    balance: number;
    loginTime: string;
}

const conta = {
    id: '2',
    email: 'mock@mock.com.br',
    password: 'test',
    name: 'Bryan',
    balance: 100,
    loginTime: new Date().toLocaleString(),
}

export const api = () => new Promise<DataInterface>((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000);
})

export const getAccountDetails = (userId: string) => new Promise<DataInterface>((resolve) => {
    setTimeout(() => {
        if(userId == conta.id) {
            resolve(conta);
        }
    }, 3000);
})
