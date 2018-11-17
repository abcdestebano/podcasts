import React, { Component } from 'react'
import 'isomorphic-fetch';
import Error from './_error';

// COMPONENTS
import Layout from '../components/Layout'
import ChannelsGrid from '../components/ChannelsGrid'

class index extends Component {

   static async getInitialProps({ res }) {
      try {
         const request = await fetch('http://api.audioboom.com/channels/recommended')
         const { body: channels } = await request.json()
         return { channels, statusCode: 200 }
      } catch (error) {
         res.statusCode = 503 
         return { channels: [], statusCode: 503 }
      }
   }

   render() {
      const { channels, statusCode } = this.props
      if (statusCode !== 200) return (<Error statusCode={statusCode} />)
      return (
         <Layout title="Podcasts">
            <ChannelsGrid channels={channels} elements="channels" />
         </Layout>
      )
   }
}

export default index