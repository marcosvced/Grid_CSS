const OHero = Vue.component('o-hero', {
    template: `
     <section class="o-hero -mb-5">
        <div class="m-hero__wrapper -container">
        <div class="-display-row -wrap -justify-between -align-start">
            <h1 class="a-hero__title -col-12 -lg-col-8">
                Aguia<br/> Design System
            </h1>
            <div class="m-hero__content -col-12 -md-col-7 -lg-col-4">
                <header class="m-header -col-12 -mb-2">
                    <p class="a-header__abstract">INTRODUCTION</p>
                    <h2 class="a-header__tile">A simple responsive framework</h2>
                    <p class="a-header__description">
                        that offers a starting point with which you don't need to fight with the unnecessary default styles of other frameworks.
                        With which you can organize your code using the ABEM methodology that you can customize as never before.  
                    </p>
                </header>
               <a class="a-button -btn-link" href="https://github.com/marcosvced/Grid_CSS" target="_blank">Download <i class="a-icon -arrow-right"></i> </a>
            </div>
        </div>

        </div>
    </section>
    `
})
