import { useEffect, useState } from "react"



export default function LoadProducts() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    //if you want to disable the button when size =100
    const [disableButton,setdisableButton] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true)

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);

            const result = await response.json();

            if (result && result.products && result.products.length) {
                // append in existing array of products
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false)

            }

            console.log(result)
        }
        catch (e) {
            setLoading(false)
            // console.log(e)
        }
    }

    useEffect(() => { fetchProducts(); }, [count]);

    useEffect(() => {
        if(products && products.length == 100) 
          setdisableButton(true);
    },[products])

    if (loading) return <div>Loading !! please wait </div>

    return (<div className="flex flex-col gap-10 mb-20">
    <hr className=' w-screen h-4 border-black mb-10  ' />
    <h1 className='text-center text-4xl text-green-400 mb-9  -mt-16 underline font-bold ' > Challange - 05 React </h1>
            <h2 className="text-center text-2xl mb-9 font-bold"> Load More Products... </h2>
        <div className=" grid grid-cols-4 gap-4  ">
            {products && products.length ? products.map((item) => <div key={item.id} className=" p-4 flex flex-col gap-4 border  overflow-hidden ">
                <img src={item.thumbnail} alt={item.title}
                    width={250}
                    height={250} />
                <p>{item.title}</p>
                <p className=" font-thin text-sm"> ---{item.description}</p>
            </div>) : null}
        </div>
        <div className=" flex flex-col justify-center items-center">
            <button disabled={disableButton} className="p-2 outline m-4 rounded-md" onClick={() => setCount(count + 1)} >Load More Products</button>
            { disableButton ? <p>You have reached to 100 products</p> : null }
        </div>
        <hr className=' w-screen h-4 border-black  ' />
    </div>)
}