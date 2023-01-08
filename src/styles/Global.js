import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
   @font-face {
      font-family: "Proxima-Nova-Bold";
      src: url("../fonts/Proxima-Nova-Bold.otf");
      font-display: swap;
   }

   @font-face {
      font-family: "Proxima-Nova-Reg";
      src: url("../fonts/Proxima-Nova-Reg.otf");
      font-display: swap;
   }

   @font-face {
      font-family: "Proxima-Nova-SemiBold";
      src: url("../fonts/Proxima-Nova-Semibold.otf");
      font-display: swap;
   }

   $text-color: #25282b;

   * {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   }

   body, html {
   font-family: "Proxima-Nova-Reg", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
   color: $text-color;
   }

`

export default GlobalStyles
