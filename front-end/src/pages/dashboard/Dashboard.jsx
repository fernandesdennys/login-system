import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="p-20px">
      <h1>Dashboardssss</h1>
      <p>Você está logado!</p>

      <button onClick={handleLogout}>
        Logoutddsas
      </button>
    </div>
  );
}

export default Dashboard;