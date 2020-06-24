const OWrap = Vue.component('o-wrap', {
    template: `
    <section class="o-wrap -container -mb-5">
        <header class="o-header -col-12 -mb-2">
            <h2 class="m-header__tile">Grid breakpoints with wrap modifier</h2>
        </header>
        <div class="m-grid-wrapper -display-row -wrap">
            <div class="a-box -bordered  -col-12 -ip-col-6 -lg-col-4">
                <p class="-display-none -lg-display-block">-lg-col-4</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-6</p>
                <p class="-display-block -ip-display-none">-col-12</p>
            </div>
            <div class="a-box -bordered  -col-12 -ip-col-6 -lg-col-4">
                <p class="-display-none -lg-display-block">-lg-col-4</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-6</p>
                <p class="-display-block -ip-display-none">-col-12</p>
            </div>
            <div class="a-box -bordered  -col-12 -lg-col-4">
                <p class="-display-none -lg-display-block">-lg-col-4</p>
                <p class="-display-block -lg-display-none">-col-12</p>
            </div>
        </div>
    </section>
    `
})
