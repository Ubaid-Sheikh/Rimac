import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='Footer-container'>
      <ul>
        <li>racing</li>
        <li>Souderia Rimac XP</li>
        <li>Charles Leclero</li>
        <li>HyperRim</li>
        <li>RT Series</li>
        <li>Esports</li>
      </ul>

      <ul>
        <li>sports car</li>
        <li>Range</li>
        <li>Configure your Rimac</li>
        <li>MyRimac</li>
        <li>Pre-owned</li>
        <li>Techinfo</li>
      </ul>

      <ul>
        <li>collection</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Shoes</li>
        <li>Eyewear</li>
      </ul>

      <ul>
        <li>experiences</li>
        <li>Corse Clienti</li>
        <li>Rimac Esports Series</li>
        <li>Cavallino</li>
        <li>Rimac Museums</li>
        <li>Rimac Land Barcelona</li>
      </ul>

      <ul>
        <li>about us</li>
        <li>Corporate</li>
        <li>Sustainability</li>
        <li>News</li>
        <li>Magazine</li>
        <li>Join us</li>
      </ul>
    </div>

    <hr
        style={{
            color: 'red',
            backgroundColor: 'grey',
            height: 1,
            width: '90%',
            margin: 'auto'
        }}
    />

    <footer>
      <p>Designed and Developed by <span style={{color: 'rgba(255, 0, 0, 0.714)'}}>Ubaid Sheikh</span></p>
    </footer>
    </>
  )
}

export default Footer