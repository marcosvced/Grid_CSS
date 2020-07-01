const OText = Vue.component('o-text', {
    template: `
    <section class="o-texts -container -mb-4 -md-mb-7">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile">Text alignment</h2>
            <p class="a-header__description -col-12 -lg-col-9">
               Easily realign text to components with text alignment classes.
            </p>
        </header>
        <div class="m-text-wrapper -display-row -gap">
            <p class="a-text -radius -col-4">
                -text-left
            </p>
            <p class="a-text -text-center -radius -col-4">
                -text-center
            </p>
            <p class="a-text -text-right -radius -col-4">
                -text-right
            </p>
        </div>
    </section>
    `
})
