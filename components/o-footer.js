const OFooter = Vue.component('o-footer', {
    template: `
     <footer class="o-footer -display-row -justify-center -align-center -text-center -pt-10 -pb-10 -md-pb-5">
        <div class="m-footer__wrapper -container -display-column -align-center -justify-center">
            <a href="https://marcosve.netlify.app/" target="_blank">
                <div class="a-logo__icon-devler -mb-3"></div>
            </a>
            <div class="a-footer__title -mb-2 -lg-mb-5">
                <b>Thanks for scrolling,</b> <span>that's all folks.</span>
            </div>
            <div class="a-footer__subtitle">
               <small>Designed and built with love and moito traballo by</small>
               <small class="-bold">
                    <a href="https://www.linkedin.com/in/marcosvced/" target="_blank">@marcosvced</a>
               </small>
               <small>with the help of</small>
               <small class="-bold">Ke-t</small>
               <small>and</small>
               <small class="-bold">
                   <a href="https://www.linkedin.com/in/nmcastellvi" target="_blank">@nmcastellvi</a>
                   .
               </small>
            </div>
            <div class="a-footer__subtitle">
               <small>Currently v1.0.0. Code licensed MIT.</small>
            </div>
        </div>
    </footer>
    `
})
