const OFlexModifiers = Vue.component('o-flex-modifiers', {
    template: `
    <section class="o-flex-modifiers -container -mb-4 -md-mb-7">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile">Flex box behaviors</h2>
            <p class="a-header__description -col-12 -lg-col-9">
                Quickly manage the layout direction and alignment with a full suite of responsive flexbox utilities.
            </p>
        </header>
         <div class="m-text__wrapper">
            <p class="a-flex-modifiers__text">Use align-items utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column).<br/>Choose from start, end, center, baseline, or stretch (browser default).</p>
        </div>
        <div class="-display-row -gap -wrap">
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -align-start -mb-1 -col-12 -ip-col-4">
                <p class="a-text">
                    -align-start
                </p>
                <p class="a-text">
                    -align-start
                </p>
            </div>
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -align-center -mb-1 -col-12 -ip-col-4">
                <p class="a-text">
                    -align-center
                </p>
                <p class="a-text">
                    -align-center
                </p>
            </div>
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -align-end -mb-1 -col-12 -ip-col-4">
                <p class="a-text">
                    -align-end
                </p>
                <p class="a-text">
                    -align-end
                </p>
            </div>
        </div>
        <div class="m-text__wrapper">
            <p class="a-flex-modifiers__text">Use justify-content utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column).<br/>Choose from start, end, center, etc.</p>
        </div>
        <div class="-display-row -gap -wrap">
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-start -align-center -mb-1 -col-12 -ip-col-4">
                <p class="a-text">
                    -justify-start
                </p>
                <p class="a-text">
                    -justify-start
                </p>
            </div>
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-center -align-center -mb-1 -col-12 -ip-col-4">
                <p class="a-text">
                    -justify-center
                </p>
                <p class="a-text">
                    -justify-center
                </p>
            </div>
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-end -align-center -mb-1 -col-12 -ip-col-4">
                <p class="a-text">
                    -justify-end
                </p>
                <p class="a-text">
                    -justify-end
                </p>
            </div>
        </div>
        <div class="-display-none -md-display-row -md-gap -md-wrap">
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-around -align-center -mb-1 -col-12 -ip-col-6">
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
            <div class="m-flex-modifiers-wrapper -display-row -flex-box -justify-between -align-center -mb-1 -col-12  -ip-col-6">
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
                <li class="a-list__item -md-display-none">-justify-around</li>
                <li class="a-list__item -md-display-none">-justify-between</li>
                <li class="a-list__item">-wrap</li>
                <li class="a-list__item">-display-row</li>
                <li class="a-list__item">-display-row-reverse</li>
                <li class="a-list__item">-display-column</li>
                <li class="a-list__item">-display-column-reverse</li>
                <li class="a-list__item">-order-n</li>
            </ul>
        </div>
    </section>
    `
})
