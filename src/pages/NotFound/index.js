import React from "react";

const style = {
  backgroundImage: `url("https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs=")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
};

function NotFound() {
  return <div style={style}></div>;
}

export default NotFound;
