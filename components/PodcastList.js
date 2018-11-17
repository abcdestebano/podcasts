import React, { Fragment } from 'react'
import slug from '../helpers/slug'

const getDate = (timestamp) => {
   timestamp = `${timestamp}000`
   const date = new Date(Number(timestamp))
   return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`
}

const PodcastList = ({ audios, onClickPodcast }) => {
   return (
      <div className="container">
         <h2>Últimos podcasts</h2>
         {audios.map((audio) => (
            <a href={`/${slug(audio.channel.title)}.${audio.channel.id}/${slug(audio.title)}.${audio.id}`}
               onClick={(event) => onClickPodcast(event, audio)} 
               key={audio.id} 
               className="audio-container">
               <img src={audio.urls.image || 'https://image.flaticon.com/icons/svg/831/831299.svg'} />
               <div className="container-text">
                  <h4>{audio.title}</h4>
                  <p>{audio.user.username}</p>
                  <p>{getDate(audio.recorded_at_ts)}</p>
               </div>
            </a>
         ))}
         <style jsx>{`
            .container {
               padding: 0 10px;
            }
            .audio-container {
               display: grid;
               grid-template-columns: 1fr 3fr;
               padding: 5px 0;
               text-decoration: none;
               color: #4A4A4A;
               border-bottom: 1px solid rgba(0, 0, 0, 0.1);
               width: 80%;
               margin-left: 10px
            }
            img {
               height: 100px;
               width: 100%;
               border-radius: 5px;
            }
            .container-text {
               margin-left: 10px;
            }
            h4 {
               margin: 0  
            }
            .container-text span {
               width: 100px
            }
         `}</style>
      </div>
   )
}

export default PodcastList
