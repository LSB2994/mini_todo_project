export const registerUser = async (request) => {
    //   console.log("Request : ", request);
    //   const { email, password } = request;
    const user = await fetch(`http://localhost:3000/api/register`, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(request),
    });
  
    return user;
  };