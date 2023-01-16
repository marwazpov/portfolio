import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = ({loading}) => {
  return (
    <div className='h-screen portfolio flex flex-col justify-center items-center '>
    <ScaleLoader
     color={'#FFFF00'}
     loading={loading}
     size={200}
     aria-label="Loading Spinner"
     data-testid="loader"
   />
   </div>
  )
}

export default Loader
