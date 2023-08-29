import React, {useState, useEffect} from 'react'
import '../styles/BackgroundSlider.css'
import imageSlide from '../utility/data';

const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2){
                setCurrentState(0)
            } else{
                setCurrentState(currentState + 1)
            }
        }, 5000)
        return()=> clearTimeout(timer)
    }, [currentState])
    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }
    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }
  return (
    <div className = 'amigo'>
        <div style={bgImageStyle}></div>
        <div className='transparent-background'></div>
        <div className = 'elephant'>
            <div className='clam bkg'>
               <div>
                <h1>{imageSlide[currentState].title}</h1>
                <p>{imageSlide[currentState].body}</p>
            </div>
            <div className='monkey'>
                {
                    imageSlide.map((imageSlide, currentState) => (
                        <span key={currentState} onClick={() => goToNext(currentState)}></span>
                    ))
                }
            </div> 
            </div>
            
        </div>
    </div>
  )
}

export default BackgroundSlider;
