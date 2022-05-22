import { Button } from "@material-ui/core";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <span className="title">Page Not Found</span>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default NotFound;
