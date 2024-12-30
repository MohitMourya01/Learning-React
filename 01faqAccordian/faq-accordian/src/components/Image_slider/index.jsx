import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import '../styles.css'

export default function ImageSlider({ url, limit }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlider] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImage(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data)
                setLoading(false)
            }
        }
        catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    function handlePrev() {
        setCurrentSlider(currentSlide === 0 ? images.length - 1 : currentSlide-1);
    }

    // function handleNext() {
    //      setCurrentSlider(currentSlide === images.length - 1 ? currentSlide = 0 : currentSlide+1 );
    // }

    function handleNext(){
        setCurrentSlider(currentSlide === images.length-1 ? 0 : currentSlide+1)
    }
   
    useEffect(() => {
        if (url !== '') fetchImage(url);

    }, [url]);

    if (loading) {
        return <div>Loading Data ! Please wait ...</div>
    }
    if (errorMsg != null) {
        return <div>Error Occurred !! {errorMsg}</div>
    }
    return (<div className="  justify-center items-center w-600 h-450  ">
           
           <h1 className='text-center text-4xl text-green-400 mb-9 top-4 underline font-bold ' > Challange - 04 React </h1>
            <h2 className="text-center text-2xl mb-9 font-bold">Image Slider - </h2>

          <div className="relative flex justify-center items-center w-full h-full">
        <BsArrowLeftCircleFill onClick={handlePrev} className="absolute w-8 h-8 text-white backdrop-filter left-1" /> 
        
         {images && images.length ? images.map( (imageItem, idx )=> (<img src={imageItem.download_url}
         width={ 500}
         height={ 250}
          key={imageItem.id} alt="Images"   className={ currentSlide=== idx ? " rounded-md shadow-gray-50" : "hidden"  }
         
        />
        )) : null}

        <BsArrowRightCircleFill onClick={handleNext} className=" absolute w-8 h-8 text-white backdrop-filter right-1" />

        <span className="flex absolute bottom-2">
        
        {images && images.length ? images.map((_, index) => (<button
                key={index}
                className={ " bg-white m-1 z-10  p-1.5 border-none outline-none my-0.5 cursor-pointer" + (currentSlide !== index ? ' bg-gray-500 p-2  rounded-full' : 'bg-white rounded-full' )}
                onClick={() => setCurrentSlider(index)}
            ></button>)) : null}
        </span>
        
        </div>
    </div>
    )

}