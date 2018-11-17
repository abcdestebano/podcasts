import React from 'react'

const Banner = ({ banner, title }) => {
   return (
      <div>
         <img src={banner} alt={title} />
         <h1>{title}</h1>
         <style jsx>{`
            div {
               position: relative;
               display: flex;
               justify-content: center;
               align-items: center;
            }
            img {
               width: 100%;
               height: auto;
            }
            h1 {
               position: absolute;
               color: white;
               text-shadow: 0 1px 2px black;
               font-size: 3rem;
               margin: 0;
            }
         `}</style>
      </div>
   )
}
export default Banner
