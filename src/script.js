import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll'; // Importez la fonction de défilement

function App() {
  // Utilisez useEffect pour déclencher l'animation lorsque le composant est monté
  useEffect(() => {
    scroll.scrollToTop(); // Défilez vers le haut pour déclencher l'animation
  }, []);

  return (
// Fonction pour détecter si un élément est dans la fenêtre visible
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Fonction pour activer les animations lorsque les éléments sont visibles
  function animateOnScroll() {
    var elementsToAnimate = document.querySelectorAll('#text1, #logo, #phone, #GooglePlay, button, .contact-info, .contact-item, .social-icons, .contact-logo');
  
    elementsToAnimate.forEach(function(element) {
      if (isElementInViewport(element)) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Événement de défilement pour déclencher l'animation lors du défilement
  window.addEventListener('scroll', animateOnScroll);
  
  // Déclencher l'animation initiale au chargement de la page
  animateOnScroll();
    );
}

export default App;