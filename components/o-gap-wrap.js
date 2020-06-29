const OGapWrap = Vue.component('o-gap-wrap', {
    template: `
    <section class="o-gap-wrap -container -mb-5">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile"><code>-gap</code> and <code>-wrap</code> modifiers</h2>
            <p class="a-header__description -col-12 -lg-col-9">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto at, autem est eum excepturi, fugit id incidunt laborum magnam molestias nesciunt porro quisquam repudiandae saepe tenetur ullam, voluptatum?
            </p>
        </header>
        <div class="m-grid-wrapper -display-row -gap -wrap">
            <div class="a-box -radius  -col-12 -remove-gap -ip-col-6 -ip-restore-gap -lg-col-4">
                <p class="-display-none -lg-display-block">-lg-col-4</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-6</p>
                <p class="-display-block -ip-display-none">-col-12</p>
            </div>
            <div class="a-box -radius  -col-12 -remove-gap -ip-col-6 -lg-col-4 -lg-restore-gap">
                <p class="-display-none -lg-display-block">-lg-col-4</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-6</p>
                <p class="-display-block -ip-display-none">-col-12</p>
            </div>
            <div class="a-box -radius  -col-12 -lg-col-4">
                <p class="-display-none -lg-display-block">-lg-col-4</p>
                <p class="-display-block -lg-display-none">-col-12</p>
            </div>
        </div>
                        <pre>
            <code class="-markup" contenteditable="false" spellcheck="false">
&lt;div class="-display-row -gap -wrap">
    &lt;div class="-col-12 -remove-gap -ip-col-6 -ip-restore-gap -lg-col-4">
        &lt;!-- -->
    &lt;/div>
    &lt;div class="-col-12 -remove-gap -ip-col-6 -lg-col-4 -lg-restore-gap">
        &lt;!-- -->
    &lt;/div>
    &lt;div class="-col-12 -lg-col-4">
        &lt;!-- -->
    &lt;/div>
&lt;/div>
            </code>            
        </pre>
    </section>
    `
})
