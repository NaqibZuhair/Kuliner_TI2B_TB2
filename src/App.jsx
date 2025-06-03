import React from 'react'
import logo from './assets/images/logo.jpg'
import './css/style.css'

const Header = () => (
  <header className="header">
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="Glass House Logo" />
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./history/history.html">History</a></li>
          <li><a href="./gallery/gallery.html">Gallery</a></li>
          <li><a href="./contact/contact.html">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="hero">
    <div className="container">
      <div className="hero-content">
        <h1>Glass House</h1>
        <button>Contact</button>
      </div>
    </div>
  </section>
);

const Menu = () => (
  <section className="menu">
    <div className="container">
      <div className="menu1">
        <div className="menu-item">
          <img src="./assets/images/Chicken Cordon Bleu.jpg" alt="Menu Item 1" />
          <h2>Chicken Cordon Bleu</h2>
        </div>
        <div className="menu-item">
          <img src="./assets/images/Chicken Cordon Bleu.jpg" alt="Menu Item 1" />
          <h2>Chicken Cordon Bleu</h2>
        </div>
        <div className="menu-item">
          <img src="./assets/images/Chicken Cordon Bleu.jpg" alt="Menu Item 1" />
          <h2>Chicken Cordon Bleu</h2>
        </div>
      </div>
      <div className="menu2">
        <div className="menu-item">
          <img src="./assets/img/Menu2.jpg" alt="Menu Item 1" />
          <h2>Menu Item</h2>
        </div>
        <div className="menu-item">
          <img src="./assets/img/Menu2.jpg" alt="Menu Item 1" />
          <h2>Menu Item</h2>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="about-section">
    <div className="container" id="about-section">
      <div className="about-box large-box">
        <div className="small-item">
          <h2>Menu Kami</h2>
          <ul className="dynamic-text">
            <li>Mushroom & Fries</li>
            <li>Chicken Chili Wings</li>
            <li>Pangsit Ayam Bongkot</li>
            <li>Nasi Goreng Cumi Kemangi</li>
            <li>Nasi Goreng Buntut</li>
            <li>Nasi Bakar Krengsengan Daging</li>
            <li>Lontong Cap Gomeh</li>
            <li>Nasi Ayam Cabai Hijau</li>
            <li>Paha Ayam Bakar Ketumbar</li>
            <li>Dori Sambal Bongkot</li>
            <li>Chicken Caesar Salad</li>
            <li>Crusted John Dory Fish</li>
            <li>Rustic Egg Benedict</li>
            <li>Chicken Mozza</li>
          </ul>
        </div>
      </div>
      <div className="about-box small-box">
        <div className="small-item">
          <p>
            The Glass House Resto Bogor menyediakan makanan yang lezat dan terjangkau, dengan menu yang bervariasi. Restoran ini cocok untuk dikunjungi bersama keluarga atau teman-teman, dan juga cocok untuk acara-acara khusus seperti perayaan ulang tahun atau pernikahan. Jangan lupa untuk mengambil beberapa foto di restoran ini, karena tempat ini sangat Instagramable!
          </p>
        </div>
        <div className="small-item">
          <p>
            Restoran ini terbagi ke dalam beberapa area dengan nuansa berbeda: ada Main Hall yang mewah, Flower Area yang romantis, Garden Area yang alami, dan tentu saja Glass House yang menjadi ikon utama. Kalian bisa memilih duduk di area favorit sesuai dengan mood atau keperluan, mulai dari kumpul santai, rapat, hingga makan malam romantis.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const AboutSecondSection = () => (
  <section className="about-second-section">
    <div className="container" id="about-section">
      <div className="about-box">
        <p>
          The Glass House Resto hadir sebagai tempat makan yang tak hanya menawarkan cita rasa kuliner, tetapi juga pengalaman visual yang memukau. Terletak di kawasan strategis Jalan Pajajaran Indah Raya, restoran ini menjadi tempat favorit warga lokal maupun wisatawan yang ingin bersantai dalam suasana yang elegan.
          
          Sesuai namanya, desain bangunan The Glass House didominasi oleh kaca, menghadirkan kesan luas, terang, dan natural. Sinar matahari yang masuk bebas dari setiap sisi menciptakan suasana hangat yang nyaman, baik siang maupun malam. Desain ini menjadikan restoran ini sangat cocok untuk foto-foto atau sekadar menikmati estetika ruang yang modern.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <p>Footer</p>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <Hero />
    <Menu />
    <AboutSection />
    <AboutSecondSection />
    <Footer />
  </div>
);

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
