/* export async function loginRequest(email, password) {
  const response = await fetch("http://localhost:8080/users", {
    method: "GET",
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
} */

export async function loginRequest(email, password) {
  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  console.log("Status:", response.status);

  const text = await response.text();
  console.log("Resposta bruta:", text);

  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    // se não for JSON (ex: "login funcionando")
    return text;
  }

  if (!response.ok) {
    throw new Error(data.message || "Erro no login");
  }

  return data;
}