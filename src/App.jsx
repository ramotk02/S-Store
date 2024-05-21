import React, { useEffect } from 'react';
import logo from './assets/image3.svg';
import logo2 from "./assets/logo2.svg";
import phone from './assets/Layer 1.svg';
import googleplay from './assets/playgoogle.svg';
import all from './assets/Background.svg';
import compte from './assets/account.svg';
import truck from './assets/camion.svg';
import bag from './assets/sac.svg';
import cash from './assets/cash.svg';
import facebookIcon from './assets/fb.svg';
import twitterIcon from './assets/x.svg';
import instagramIcon from './assets/insta.svg';

function App() {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateOnScroll() {
    var elementsToAnimate = document.querySelectorAll('#text1, #logo, #phone, #GooglePlay, button, .contact-info, .contact-item, .social-icons, .contact-logo');
    elementsToAnimate.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <section id="BigSecction">
      <section id="FirstPage">
        <div>
          <img id="logo" src={logo} alt="logo" />
          <div id="text1">
            <h1>CHRI, W GHIIIR MN BLASTEK!</h1>
          </div>
          <div className="button2">
            <button>
              <h2>Télécharger l'application</h2>
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </div>
        </div>
        <div id="phone">
          <img id="phone" src={phone} alt="phone" />
          <div id='GooglePlay'><a class="playstore-button" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="icon" viewBox="0 0 512 512">
    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
  </svg>
  <span class="texts">
    <span class="text-1">GET IT ON</span>
    <span class="text-2">Google Play</span>
  </span>
            </a></div>
        </div>
      </section>

      <section id="SecondPage">
        <div id="text">
          <h1>Qu'est-ce que S-souk?</h1>
          <h2>Blan mriguel!</h2>
          <div id="paragraphe">
            <p>
              S-SOUK est une plateforme en ligne de vente en gros qui permet
              d’acheter une large gamme de produits en grande quantité à des
              prix compétitifs. Elle facilite l'achat de ces produits en
              connectant les acheteurs à des fournisseurs et fabricants à
              travers sa plateforme en ligne.
            </p>
            <br />
            <p>
              En plus de la vente en gros de produits, S-SOUK fournit également
              des informations et des analyses sur le marché de la vente en
              gros, ce qui permet aux acheteurs de rester informés des tendances
              et des évolutions du marché.
            </p>
            <br />
            <p>
              S-SOUK permet ainsi aux acheteurs de trouver facilement des
              produits en gros à des prix compétitifs, tout en bénéficiant d'une
              expérience d'achat simple et efficace.
            </p>
          </div>
        </div>
        <div id="pic">
          <img src={all} alt="all" />
        </div>
      </section>

      <section id="ThirdPage">
        <div id="BigTitle">
          <div>
            <h1>Pourquoi </h1>
            <h1>choisir S-souk?</h1>
          </div>
          <h2>Ghadi Yhenik !</h2>
        </div>

        <div id="Grid">
          <div className="grid-item extremity">
            <div id="circle">01</div>
            <p>Interface simple et descriptions de produits claires</p>
          </div>

          <div class="grid-item middle">
            <div id="circle">02</div>
            <p>
              Les revendeurs sont informés en temps réel (notifications push)
            </p>
          </div>

          <div className="grid-item extremity">
            <div id="circle">03</div>
            <p>
              La livraison se fait directement à votre point de vente dans des
              délais rapides
            </p>
          </div>
        </div>
      </section>

      <section id="FourthPage">
        <div>
          <div>
            <h1>Comment ça marche</h1>
            <h2>SaaaaaaheL!</h2>
          </div>
          <div id="parts">
            <div className="part">
              <img src={compte} alt="account" />
              <p>Inscrivez-vous et obtenez l'accès à votre application mobile.</p>
            </div>
            <div className="part">
              <img src={bag} alt="bag" />
              <p>Découvrez nos produits et ajoutez-les à votre panier d'achats.</p>
            </div>
            <div className="part">
              <img src={cash} alt="cash" />
              <p>Sélectionnez votre méthode de paiement, puis confirmez-la.</p>
            </div>
            <div className="part">
              <img src={truck} alt="truck" />
              <p>S-souk s’occupe de tout ! Votre commande et de la livraison.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <h1>Contact</h1>
          <div className="contact-item">
            <h2>Téléphone</h2>
            <p>(212) 656-7890</p>
          </div>
          <div className="contact-item">
            <h2>Email</h2>
            <p>contact@ssouk.com</p>
          </div>
          <div className="contact-item follow-us">
            <h2>Nous suivre</h2>
            <div className="social-icons">
              <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
              <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
              <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <div className="contact-logo">
          <img src={logo2} alt="S-Souk Logo" />
        </div>
      </section>
    </section>
  );
}

export default App;
