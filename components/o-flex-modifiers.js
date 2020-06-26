const OText = Vue.component('o-text', {
    template: `
    <section class="o-texts -container -mb-4 -md-mb-7">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile -mb-4">Flex box modifiers</h2>
            <p class="a-header__description -col-12 -lg-col-9">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto at, autem est eum excepturi, fugit id incidunt laborum magnam molestias nesciunt porro quisquam repudiandae saepe tenetur ullam, voluptatum?
            </p>
        </header>
        <div class="m-text-wrapper -display-row-gap -flex-box">
            <p class="a-text -radius -display-row -align-start -col-4">
                -text-left
            </p>
            <p class="a-text -display-row -align-center -col-4">
                -text-center
            </p>
            <p class="a-text -display-row -align-end -radius -col-4">
                -align-end
            </p>
        </div>
    </section>
    `
})
