import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className="container mx-auto pt-6">
      <div className="justify-left max-w-screen-sm mx-auto px-10 pb-5 ">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    </div>

  )
}

export default LoadingSpinner;
