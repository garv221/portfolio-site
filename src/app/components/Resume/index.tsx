import Footer from "../Footer/footer";
import Card from "./card";

const Resume = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "#e6dace",
        paddingTop: "250px",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#0050ff",
            width: "20px",
            height: "20px",
            marginTop: "5px",
            marginRight: "5px",
          }}
        ></div>
        <div
          style={{
            fontSize: "38px",
            fontWeight: "800",
            color: "#2e2e2e",
          }}
        >
          Resume
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "40px",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "40px",
          marginLeft: "391px",
          marginRight: "391px",
        }}
      >
        <div
          style={{
            fontSize: "25px",
            fontWeight: "800",
            color: "#2e2e2e",
          }}
        >
          Experience
        </div>
        <button
          style={{
            backgroundColor: "#0050ff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            width: "143px",
            height: "40px",
            fontWeight: "700",
          }}
        >
          DOWNLOAD CV
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card />
        <br />
        <Card />
      </div>
    </div>
  );
};

export default Resume;
