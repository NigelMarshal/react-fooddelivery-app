import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className="container mx-auto pt-8">
      <div className="justify-left max-w-screen-sm mx-auto p-8 ">
        <Loader
          type="Rings"
          color="#1258fe"
          height={400}
          width={400}
        />
      </div>
    </div>

  )
}

export default LoadingSpinner;
