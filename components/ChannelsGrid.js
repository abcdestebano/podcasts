import React from 'react'
import { Link } from '../routes'
import slug from '../helpers/slug'

const ChannelsGrid = ({ channels, elements }) => {
   const link = elements === 'channels' ? '/channel?id=' : '/podcast?id='
   return (
      <div className="channels">
         {channels.map((channel) => (
            <Link
               route='channel'
               params={{
                  slug: slug(channel.title), id: channel.id
               }}
               key={channel.id}
               prefetch>
               <a className="channel">
                  <img src={channel.urls.logo_image ? channel.urls.logo_image.original : channel.urls.image} alt="" />
                  <h2>{channel.title}</h2>
               </a>
            </Link>
         ))}
         <style jsx>{`
                     .channels {
               display: grid;
         grid-gap: 15px;
         padding: 15px;
         grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      }
            a.channel {
            display: block;
         margin-bottom: 0.5em;
         color: #333;
         text-decoration: none;
      }
            .channel img {
            border - radius: 3px;
         box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
         width: 100%;
      }
            h2 {
            padding: 5px;
         font-size: 0.9em;
         font-weight: 600;
         margin: 0;
         text-align: center;
      }
         `}</style>
      </div >
   )
}

export default ChannelsGrid
