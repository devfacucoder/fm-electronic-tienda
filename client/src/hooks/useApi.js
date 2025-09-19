
const apiUrl = import.meta.env.VITE_API_URL;
function useApi() {
    const login = async (credentials) => {
        const response = await fetch(`${apiUrl}/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    };

    return { login };
}
export default useApi
