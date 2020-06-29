const OWrap = Vue.component('o-wrap', {
    template: `
    <section class="o-wrap -container -mb-5">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile">Responsive with wrap rows</h2>
            <p class="a-header__description -col-12 -lg-col-9">
                The <code class="a-code -code-inline">-wrap</code> modifier breaks the row when it get the maximum of columns.
            </p>
            <p class="a-header__description -col-12 -lg-col-9">
                Resize the browser to see the effect.
            </p>
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
                        <pre>
            <code class="-markup" contenteditable="false" spellcheck="false">
&lt;div class="-display-row -wrap">
    &lt;div class="-col-12 -ip-col-6 -lg-col-4">
        &lt;!-- -->
    &lt;/div>
    &lt;div class="-col-12 -ip-col-6 -lg-col-4">
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
