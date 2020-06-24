const OGutter = Vue.component('o-gutter', {
    template: `
    <section class="o-gutter -container -mb-5">
        <header class="o-header -col-12 -mb-2">
            <h2 class="m-header__tile">Grid columns with gutter</h2>
        </header>
        <div class="m-grid-wrapper -display-row-gap">
            <div class="a-box -radius -col-1" v-for="index in 12" :key="index">
                <p>-col-1</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row-gap">
            <div class="a-box -radius -col-2" v-for="index in 6" :key="index">
                <p>-col-2</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row-gap">
            <div class="a-box -radius -col-3" v-for="index in 4" :key="index">
                <p>-col-3</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row-gap">
            <div class="a-box -radius -col-4" v-for="index in 3" :key="index">
                <p>-col-4</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row-gap">
            <div class="a-box -radius -col-6" v-for="index in 2" :key="index">
                <p>-col-6</p>
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
