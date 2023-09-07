import React from 'react'

const ProgressBar = (progress) => {
    
    const color1 =[
        'rgb(255,175,163)',

    ]
    const color2 = [
        'rgb(141,181,145)',
    ]
  return (
    <div className="outer-bar">

        <div className="inner-bar" style={{width: `${progress.progress}%`,backgroundColor: progress.progress < 50 ? color1 : color2}}>

        </div>
    </div>
  )
}

export default ProgressBar