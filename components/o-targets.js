const OTargets = Vue.component('o-targets', {
    template: `
        <section class="o-targets -container -display-column -ip-display-row -mb-10">
        <div class="m-target__wrapper -p-3 -ip-pt-14 -lg-display-row -mb-2 -ip-mb-0 -ip-mr-2 -col-12 -ip-col-4">
            <i class="a-icon -feather -mb-3 -lg-mb-0 -lg-mr-3"></i>
            <div class="m-target__info">
                <h2 class="a-target__title">
                    Light <br/> as a feather.
                </h2>
                <p class="a-target__subtitle">
                    Only ~ 75 kb built with Mobile First Design in mind.
                </p>
            </div>
        </div>
        <div class="m-target__wrapper -p-3 -ip-pt-13 -lg-display-row -mb-2 -ip-mb-0 -ip-mr-2 -col-12 -ip-col-4">
            <i class="a-icon -pen-tool -mb-3 -lg-mb-0 -lg-mr-3"></i>
            <div class="m-target__info">
                <h2 class="a-target__title">
                    Flexibility <br/> and quality.
                </h2>
                <p class="a-target__subtitle">
                    Styles designed for flexibility and quality, not a user interface framework.
                </p>
            </div>
        </div>
        <div class="m-target__wrapper -p-3 -ip-pt-13 -lg-display-row -col-12 -ip-col-4">
            <i class="a-icon -watch -mb-3 -lg-mb-0 -lg-mr-3"></i>
            <div class="m-target__info">
                <h2 class="a-target__title">
                    Easy <br/> quick start.
                </h2>
                <p class="a-target__subtitle">
                    Quick start without compiling and installing. No JS, no Third party libraries.
                </p>
            </div>
        </div>
    </section>
    `
})
