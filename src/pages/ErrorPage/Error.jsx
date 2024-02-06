import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <style jsx> {`
      .error-page {
        background: #221e1f;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .error-page-item {
        display: flex;
        justify-content: center;
        color: white;
        font-family: 'Exo';
        font-size: 5vh;
      }
    `}
    </style>
    <div className="error-page">
      <div className="error-page-item">
        <img src="https://octodex.github.com/images/privateinvestocat.jpg" alt="privateinvestocat.jpg" width="25%"></img>
      </div>
      <p className="error-page-item">Page not found.</p>
      {/*
      <p className="error-page-item">
        <i>{error.statusText || error.message}</i>
      </p>
    */}
    </div>
    </>
  );
}