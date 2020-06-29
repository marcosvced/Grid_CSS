const OBreakpoints = Vue.component('o-breakpoints', {
    template: `
     <section class="o-breakpoints -container -mb-5">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile -mb-4">Grid breakpoints</h2>
            <p class="a-header__description -col-12 -lg-col-9">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto at, autem est eum excepturi, fugit id incidunt laborum magnam molestias nesciunt porro quisquam repudiandae saepe tenetur ullam, voluptatum?
           </p>
        </header>
        <div class="m-grid-wrapper -display-row">
            <div class="a-box -bordered -col-7 -xsm-col-6 -sm-col-5 -md-col-4 -ip-col-3 -lg-col-2 -xl-col-1">
                <p class="-display-none -xl-display-block">-xl-col-1</p>
                <p class="-display-none -lg-display-block -xl-display-none">-lg-col-2</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-3</p>
                <p class="-display-none -md-display-block -ip-display-none">-md-col-4</p>
                <p class="-display-none -sm-display-block -md-display-none">-sm-col-5</p>
                <p class="-display-none -xsm-display-block -sm-display-none">-xsm-col-6</p>
                <p class="-display-block -xsm-display-none">-col-7</p>
            </div>
            <div class="a-box -bordered -col-5 -xsm-col-6 -sm-col-7 -md-col-8 -ip-col-9 -lg-col-10 -xl-col-11">
                <p class="-display-none -xl-display-block">-xl-col-11</p>
                <p class="-display-none -lg-display-block -xl-display-none">-lg-col-10</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-9</p>
                <p class="-display-none -md-display-block -ip-display-none">-md-col-8</p>
                <p class="-display-none -sm-display-block -md-display-none">-sm-col-7</p>
                <p class="-display-none -xsm-display-block -sm-display-none">-xsm-col-6</p>
                <p class="-display-block -xsm-display-none">-col-5</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row">
            <div class="a-box -bordered -col-12">
                    <p>-col-12</p>
            </div>
        </div>
        <div class="m-text__wrapper -pt-5">
            <p class="a-gutter__text">
                To use the <code class="a-code -code-inline">-col-</code> modifier it is not necessary to have a parent modifier of <code class="a-code -code-inline">-display-row</code> type. <br/>
                But you must use the modifier <code class="a-code -code-inline">-display-row -gap</code> to add a gutter between the columns.
            </p>
        </div>
        <pre>
            <code class="-markup" contenteditable="false" spellcheck="false">
&lt;div class="m-grid-wrapper -display-row">
    &lt;div class="a-box -bordered -col-7 -xsm-col-6 -sm-col-5 -md-col-4 -ip-col-3 -lg-col-2 -xl-col-1">
        &lt;p class="-display-none -xl-display-block"> -xl-col-1 &lt;/p>
        &lt;p class="-display-none -lg-display-block -xl-display-none"> -lg-col-2 &lt;/p>
        ...
    &lt;/div>
    &lt;div class="a-box -bordered -col-5 -xsm-col-6 -sm-col-7 -md-col-8 -ip-col-9 -lg-col-10 -xl-col-11">
        &lt;p class="-display-none -xl-display-block"> -xl-col-11 &lt;/p>
        &lt;p class="-display-none -lg-display-block -xl-display-none"> -lg-col-10 &lt;/p>
        ...
    &lt;/div>
&lt;/div>
            </code>            
        </pre>
        <div class="m-text__wrapper -pt-5">
            <p class="a-gutter__text">
              Skeleton uses media queries to serve its scalable grid, but also has a list of queries for convenience of 
              styling your site across devices. The queries are mobile-first, meaning they target min-width. Mobile-first
              queries are how Skeleton's grid is built and is the preferable method of organizing CSS. It means all styles 
              outside of a query apply to all devices, then larger devices are targeted for enhancement. This prevents 
              small devices from having to parse tons of unused CSS. The sizes for the queries are:
            </p>
        </div>
         <div class="m-text__wrapper">
            <p class="a-breakpoints__text">List of media queries:</p>

            <ul class="m-breakpoints__list -col-12 -md-fit-content -m-0 -mb-2">
                <li class="a-list__item"><b>Small Mobile:</b> 0 to 374px</li>
                <li class="a-list__item"><b>Mobile:</b> 375px to 479px</li>
                <li class="a-list__item"><b>Phablet:</b> 480px to 639px</li>
                <li class="a-list__item"><b>Tablet:</b> 640px to 1023px</li>
                <li class="a-list__item"><b>iPad - Desktop:</b> 1024px to 1365px</li>
                <li class="a-list__item"><b>Desktop HD:</b> 1366px to 1919px</li>
                <li class="a-list__item"><b>Desktop Full HD:</b> > 1920px</li>
            </ul>
         </div>
        <pre>
            <code class="-markup" contenteditable="false" spellcheck="false">
/** Mobile first queries **/

/* Large than mobile */
@media (min-width: 375px) {}

/* Large than phablet */
@media (min-width: 480px) {}

/* Large than tablet */
@media (min-width: 640px) {}

/* Large than iPad or Desktop */
@media (min-width: 1023px) {}

/* Large than Desktop HD */
@media (min-width: 1366px) {}

/* Large than Desktop Full HD */
@media (min-width: 1920px) {}
            </code>            
        </pre>
    </section>
    `
})
