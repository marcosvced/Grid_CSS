const OBreakpoints = Vue.component('o-breakpoints', {
    template: `
     <section class="o-breakpoints -container -mb-10">
        <header class="m-header -col-12 -mb-2">
            <p class="a-header__abstract">The responsive</p>
            <h2 class="a-header__tile">Grid breakpoints</h2>
            <p class="a-header__description -col-12 -lg-col-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto at, autem est eum excepturi, fugit id incidunt laborum magnam molestias nesciunt porro quisquam repudiandae saepe tenetur ullam, voluptatum?
           </p>
        </header>
        <div class="m-grid-wrapper -display-row-gap">
            <div class="a-box -radius -col-7 -xsm-col-6 -sm-col-5 -md-col-4 -ip-col-3 -lg-col-2 -xl-col-1">
                <p class="-display-none -xl-display-block">-xl-col-1</p>
                <p class="-display-none -lg-display-block -xl-display-none">-lg-col-2</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-3</p>
                <p class="-display-none -md-display-block -ip-display-none">-md-col-4</p>
                <p class="-display-none -sm-display-block -md-display-none">-sm-col-5</p>
                <p class="-display-none -xsm-display-block -sm-display-none">-xsm-col-6</p>
                <p class="-display-block -xsm-display-none">-col-7</p>
            </div>
            <div class="a-box -radius -col-5 -xsm-col-6 -sm-col-7 -md-col-8 -ip-col-9 -lg-col-10 -xl-col-11">
                <p class="-display-none -xl-display-block">-xl-col-11</p>
                <p class="-display-none -lg-display-block -xl-display-none">-lg-col-10</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-9</p>
                <p class="-display-none -md-display-block -ip-display-none">-md-col-8</p>
                <p class="-display-none -sm-display-block -md-display-none">-sm-col-7</p>
                <p class="-display-none -xsm-display-block -sm-display-none">-xsm-col-6</p>
                <p class="-display-block -xsm-display-none">-col-5</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row-gap">
            <div class="a-box -radius -col-12">
                    <p>-col-12</p>
            </div>
        </div>
    </section>
    `
})
