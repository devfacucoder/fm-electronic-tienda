const apiUrl = import.meta.env.VITE_API_URL;
function useApi() {
  const login = async (credentials) => {
    const response = await fetch(`${apiUrl}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    return response.json();
  };
  const createPost = async (postData) => {
    try {
      const response = await fetch(`${apiUrl}/api/products`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: postData, // Asumiendo que postData es un FormData
      });
      if (!response.ok) {
        throw new Error("Error al crear el post");
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  return { login, createPost };
}
export default useApi;
