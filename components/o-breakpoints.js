const OBreakpoints = Vue.component('o-breakpoints', {
    template: `
     <section class="o-breakpoints -container -mb-5">
        <header class="o-header -col-12 -mb-2">
            <h2 class="m-header__tile">Grid breakpoints</h2>
        </header>
        <div class="m-grid-wrapper">
            <div class="a-box -radius  -col-12 -xsm-col-10 -sm-col-8 -md-col-6 -ip-col-4 -lg-col-2 -xl-col-1">
                <p class="-display-none -xl-display-block">-xl-col-1</p>
                <p class="-display-none -lg-display-block -xl-display-none">-lg-col-2</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-4</p>
                <p class="-display-none -md-display-block -ip-display-none">-md-col-6</p>
                <p class="-display-none -sm-display-block -md-display-none">-sm-col-8</p>
                <p class="-display-none -xsm-display-block -sm-display-none">-xsm-col-10</p>
                <p class="-display-block -xsm-display-none">-col-12</p>
            </div>
            <div class="a-box -radius  -col-1 -xsm-col-2 -sm-col-4 -md-col-6 -ip-col-8 -lg-col-10 -xl-col-12">
                <p class="-display-none -xl-display-block">-xl-col-12</p>
                <p class="-display-none -lg-display-block -xl-display-none">-lg-col-10</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-8</p>
                <p class="-display-none -md-display-block -ip-display-none">-md-col-6</p>
                <p class="-display-none -sm-display-block -md-display-none">-sm-col-4</p>
                <p class="-display-none -xsm-display-block -sm-display-none">-xsm-col-2</p>
                <p class="-display-block -xsm-display-none">-col-1</p>
            </div>
        </div>
    </section>
    `
})
