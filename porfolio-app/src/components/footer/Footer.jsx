/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './style.css'
import sendIMG from './sendImage.png'
import { Link } from 'react-router-dom'

let pages = ['home', 'about', 'contact']

function Footer() {


  var [email,setEmail] = React.useState("");

  function handleSubmit(event) {
    window.location.href = `mailto:michael11281@hotmail.com?cc=${email}&subject=Subscripcion`;


    event.preventDefault()
    event.currentTarget.reset()
  }



  return (
    <footer>
      <div className="container py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="h3 text-white">Porafolio web</h5>
            <p className="small text-muted">
            Este sitio web lo utiliza como una presentacion web para mostrar mis habilidades y destresas en software.
   
            </p>
            <p className="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.{' '}
  
            </p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Links rapidos</h5>
            <ul className="list-unstyled text-muted">
              {pages.map((page, index) => (
                <li onClick={() => window.scrollTo(0, 0)}>
                  <Link to={page} key={index}>
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-3">Subscribete</h5>
            <p className="small text-muted">
              Subscribete para que te pueda mandar actualizaciones de mis
              projectos y que servicios puedo ofrecer como desarrollador.
            </p>
            <form action="#" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Correo electronico"
                  aria-describedby="button-addon2"
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <button
                  className="btn btn-primary"
                  id="button-addon2"
                  type="submit"

                >
                  <img
                    style={{ width: 'clamp(10px,20vw,25px)' }}
                    src={sendIMG}
                    alt="send"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
