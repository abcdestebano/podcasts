import React, { Component } from 'react'
import Layout from '../components/Layout';
import Link from 'next/link'

class Error extends Component {
   static getInitialProps({ res, err }) {
      const statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return { statusCode }
   }

   render() {
      const { statusCode } = this.props

      return (
         <Layout title="Oh no :(">
            <div className="container">
               {
                  statusCode === 404
                     ? <div className="message">
                        <h1>Está pagina no existe :(. </h1>
                        <p><Link href="/"><a>Volver al Home</a></Link></p>
                     </div>
                     : <div className="message">
                        <h1>Hubo un problema :(.</h1>
                        <p>Intenta nuevamente en unos segundos.</p>
                     </div>
               }
            </div>

            <style jsx>{`
               .container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 90vh;
               }
               .message {
                  text-align: center;
               }
               a {
                  color: #8756ca;
               }
            `}</style>
         </Layout>
      )
   }
}

export default Error