import { Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ name, setName }) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/quiz");
  };

  return (
    <main className="home">
      <div className="home-login">
        <TextField
          style={{ marginBottom: 25 }}
          label="Enter Your Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
        >
          Start Quiz
        </Button>
      </div>
      <div className="home-image">
        <img src="/home.png" className="image" alt="quiz app" />
      </div>
    </main>
  );
};

export default Home;
