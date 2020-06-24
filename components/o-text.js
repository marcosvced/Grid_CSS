const OText = Vue.component('o-text', {
    template: `
    <section class="o-texts -container -mb-5">
        <header class="o-header -col-12 -mb-2">
            <h2 class="m-header__tile">Text modifiers</h2>
        </header>
        <div class="m-text-wrapper -display-row-gap">
            <p class="a-text -radius   -col-4">
                -text-left
            </p>
            <p class="a-text -text-center -radius  -col-4">
                -text-center
            </p>
            <p class="a-text -text-right -radius -col-4">
                -text-right
            </p>
        </div>
    </section>
    `
})
