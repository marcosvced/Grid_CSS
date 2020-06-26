const OFlexModifiers = Vue.component('o-flex-modifiers', {
    template: `
    <section class="o-flex-modifiers -container -mb-4 -md-mb-7">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile -mb-4">Flex box modifiers</h2>
            <p class="a-header__description -col-12 -lg-col-9">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto at, autem est eum excepturi, fugit id incidunt laborum magnam molestias nesciunt porro quisquam repudiandae saepe tenetur ullam, voluptatum?
            </p>
        </header>
        <div class="-display-row-gap">
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -align-start -mb-1 -col-4">
                <p class="a-text">
                    -align-start
                </p>
                <p class="a-text">
                    -align-start
                </p>
            </div>
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -align-center -mb-1 -col-4">
                <p class="a-text">
                    -align-center
                </p>
                <p class="a-text">
                    -align-center
                </p>
            </div>
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -align-end -mb-1 -col-4">
                <p class="a-text">
                    -align-end
                </p>
                <p class="a-text">
                    -align-end
                </p>
            </div>
        </div>
        <div class="m-text__wrapper">
            <p class="a-flex-modifiers__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi impedit nulla porro.</p>
        </div>
        <div class="-display-row-gap">
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-start -align-center -mb-1 -col-4">
                <p class="a-text">
                    -justify-start
                </p>
                <p class="a-text">
                    -justify-start
                </p>
            </div>
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-center -align-center -mb-1 -col-4">
                <p class="a-text">
                    -justify-center
                </p>
                <p class="a-text">
                    -justify-center
                </p>
            </div>
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-end -align-center -mb-1 -col-4">
                <p class="a-text">
                    -justify-end
                </p>
                <p class="a-text">
                    -justify-end
                </p>
            </div>
        </div>
        <div class="-display-row-gap">
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-around -align-center -mb-1 -col-6">
                <p class="a-text">
                    -justify-around
                </p>
                <p class="a-text">
                    -justify-around
                </p>
                <p class="a-text">
                    -justify-around
                </p>
            </div>
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-between -align-center -mb-1 -col-6">
                <p class="a-text">
                    -justify-between
                </p>
                <p class="a-text">
                    -justify-between
                </p>
                <p class="a-text">
                    -justify-between
                </p>
            </div>
        </div>
         <div class="m-text__wrapper">
            <p class="a-flex-modifiers__text">Other flex-box modifiers are:</p>
            <ul class="m-flex-modifiers__list -list-code">
                <li class="a-list__item">-align-stretch</li>
                <li class="a-list__item">-justify-stretch</li>
                <li class="a-list__item">-justify-evenly</li>
                <li class="a-list__item">-justify-evenly</li>
                <li class="a-list__item">-wrap</li>
            </ul>
        </div>
    </section>
    `
})
