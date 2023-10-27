import React from "react";
import "./error.css";

function ErrorPage({ error }) {
  console.log(error);
  var code =null
  if(error.code) { code =  error.code} else{code = 500}
  const message = error.status;
  return (
    <section className="page_404">
      <div className="err-container">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">{code}</h1>
        </div>

        <div className="contant_box_404">
          <h3 className="h2">Something went wrong</h3>

          <p>{message}</p>

          <a href="/" className="link_404">
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
