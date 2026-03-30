export async function loginRequest(email, password) {
  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  
  console.log("Resposta:", data);

  if (!response.ok) {
    throw new Error(data.message || "Erro no login");
  }

  return data;
}