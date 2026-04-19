import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Você está logado!</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;