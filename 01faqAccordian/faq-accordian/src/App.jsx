
import Accordian from './components/Faq_accordian.jsx'
import RandomColor from './components/RandomColor.jsx'
import StarRating from './components/Start-Rating/index.jsx'
import ImageSlider from './components/Image_slider/index.jsx'
import LoadProducts from './components/Load-more-product/LoadProducts.jsx'
import QR_CodeGen from './components/QR-Code-Generator/index.jsx'

export default function App(){
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating  noOfstars = {10} />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} />
      <LoadProducts />
      <QR_CodeGen />
    </>
  )
};