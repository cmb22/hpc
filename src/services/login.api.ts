const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms));

type TProps = {
    email: string;
    password: string;
}

export const authenticate = async ({ email, password }: TProps): Promise<boolean | Error> => {
    try {
        // Simulate an API call with a delay
        await sleep(1000);
        // Here you would typically make a real API call to authenticate the user
        // For this example, we'll just check if the username and password match a hardcoded value
        if (email === 'user@test.com' && password === 'pwd') {
            // If authentication is successful, will store a token from API in localStorage
            localStorage.setItem('token', 'fake-jwt-token');
            return true;
        }
        throw new Error('Invalid username or password')
    } catch (error: any) {
        console.log('Authentication error:', error);
        return error;
    }
};