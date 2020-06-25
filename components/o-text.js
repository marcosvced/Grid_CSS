const OText = Vue.component('o-text', {
    template: `
    <section class="o-texts -container -mb-5">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile">Text modifiers</h2>
            <p class="a-header__description -col-12 -lg-col-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto at, autem est eum excepturi, fugit id incidunt laborum magnam molestias nesciunt porro quisquam repudiandae saepe tenetur ullam, voluptatum?
            </p>
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
