import React, { Component, Fragment } from 'react'
import Error from './_error';

// COMPONENTS
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import ChannelsGrid from '../components/ChannelsGrid'
import PodcastList from '../components/PodcastList';
import PodcastPlayer from '../components/PodcastPlayer';

class channel extends Component {

   constructor(props) {
      super(props);
      this.state = {
         openPodcast: null
      }
   }

   static async getInitialProps({ query, res }) {
      const idChannel = query.id
      try {
         const [requestChannel, requestChildChannels, requestAudios] = await Promise.all([
            fetch(`http://api.audioboom.com/channels/${idChannel}`),
            fetch(`http://api.audioboom.com/channels/${idChannel}/child_channels`),
            fetch(`http://api.audioboom.com/channels/${idChannel}/audio_clips`)
         ])

         if (requestChannel.status >= 404) {
            res.statusCode = requestChannel.status
            return { channel: null, audio_clips: null, channels: null, statusCode: requestChannel.status }
         }

         const { body: { channel } } = await requestChannel.json()
         const { body: { channels } } = await requestChildChannels.json()
         const { body: { audio_clips } } = await requestAudios.json()
         return { channel, audio_clips, channels, statusCode: 200 }
      } catch (error) {
         res.statusCode = 503
         return { channel: null, audio_clips: null, channels: null, statusCode: 503 }
      }

   }

   handleOpenPodcast = (event, podcast) => {
      event.preventDefault()
      this.setState({ openPodcast: podcast })
   }

   handleClosePodcast = (event) => {
      event.preventDefault()
      this.setState({ openPodcast: null })
   }

   render() {
      const { channel, audio_clips, channels, statusCode } = this.props
      const { openPodcast } = this.state
      if (statusCode !== 200) {
         return (<Error statusCode={statusCode} />)
      }
      return (
         <Layout title="Podcasts">
            <Banner
               banner={channel.urls.banner_image.original}
               title={channel.title} />
            {openPodcast && <div className="modal">
               <PodcastPlayer audio_clip={openPodcast} onClose={this.handleClosePodcast} />
            </div>}
            <div className="content">
               <PodcastList audios={audio_clips} onClickPodcast={this.handleOpenPodcast} />
               <div className="series">
                  {channels.length > 0 && <h2>Series</h2>}
                  <ChannelsGrid channels={channels} elements="channels" />
               </div>
            </div>
            <style jsx>{`
               .content {
                  display: grid;
                  grid-template-columns: 2fr 1fr;
               }
               @media only screen and (max-width: 600px) {
                  .content {
                     grid-template-columns: 1fr;
                  }
               } 
               .modal {
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  z-index: 99999;
               }
            `}</style>
         </Layout>
      )
   }
}

export default channel