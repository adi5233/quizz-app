const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        // backgroundColor: "orangered",
        textAlign: "center",
        color: "red",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
