import DescriptionBlock from './DescriptionBlocks/DescriptionBlock'
import styles from './Main.module.css'
import { ImagesOne } from '../../assets/Data/Images'
import { MainImagesData } from '../../assets/Data/Images'
import MainImage from './MainImages/MainImage'

//groupimagesca
const images1 = ImagesOne.map((el) => {
    return <div key={el}><img src={el} /></div>
})

const offsets = ["0%", "25%", "50%", "75%"] 

const image = MainImagesData.map((props, index) => {
    return <a style={{position: 'absolute', left: offsets[index]}} key={props.href} href={props.href}><img src={props.src} /></a>
})

// const images = [ <div key={0}>
//     <img src="src\assets\scale_2400.png" />
// </div>,
// <div key={1}>
//     <img src="src\assets\scale_2400 (1).png" />
// </div>,
// <div key={2}>
//     <img src="src\assets\scale_2400.jpeg" />
// </div>]

export default function() {
    return (
       <section>
        <p>Hi</p>
        <div style={{position: 'relative'}}>{image}</div>
        {/* <DescriptionBlock img={images}></DescriptionBlock> */}
        <MainImage src={image.src} href={image.href}></MainImage>
        <DescriptionBlock img={images1}></DescriptionBlock>
       </section>
    )
}