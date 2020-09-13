import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
  dangerouslySetInnerHTML={{
    __html: `
    var scroll = new SmoothScroll('a[href*="#"]', {
   
      offset: 300,
      speed: 300,
      
      // History
      updateURL: false, // Update the URL on scroll
      popstate: false, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
   
   
  });

  var closeMenu = function (event) {
      console.log("Scroll en cours");
      var input = document.querySelector('.menu-btn');
      input.checked = false;
  };
  
  
  document.addEventListener('scrollStart', closeMenu, false);


  
  
  `,
  }}
/>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
