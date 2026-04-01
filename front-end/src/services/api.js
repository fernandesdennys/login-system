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

export async function loginRequest() {
  const response = await fetch("http://localhost:8080/users", {
    method: "GET",
  });

  console.log("Status:", response.status); // 👈 status HTTP

  const text = await response.text(); // 👈 pega como texto
  console.log("Resposta bruta:", text);

  // tenta converter pra JSON depois
  let data;
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error("Resposta não é um JSON válido");
  }

  if (!response.ok) {
    throw new Error(data.message || "Erro ao buscar usuários");
  }

  return data;
}