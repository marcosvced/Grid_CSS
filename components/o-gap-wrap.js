const OGapWrap = Vue.component('o-gap-wrap', {
    template: `
    <section class="o-gap-wrap -container -mb-5">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile"><code>-gap</code> and <code>-wrap</code> modifiers</h2>
           <!-- <p class="a-header__description -col-12 -lg-col-9">
               The most sensible combination of modifiers is the use of <code class="a-code -code-inline"> -gap </code> and <code class="a-code -code-inline"> -wrap </code> in the same row. Because if the row breaks, the column shown as the last one doesn't remove the gap.
               In this case should by remove and restore the gap with the modifiers <code class="a-code -code-inline">-remove-gap</code> and <code class="a-code -code-inline">-restore-gap</code>.
              
            </p>
            <p  class="a-header__description -col-12 -lg-col-9">
                This is so because Aguia doesn't use negative padding or margins to define columns and rows.
            </p>-->
        </header>
        <div class="m-grid-wrapper -display-row -gap -wrap">
            <div class="a-box -radius  -col-12 -ip-col-6  -lg-col-4">
                <p class="-display-none -lg-display-block">-lg-col-4</p>
                <p class="-display-none -ip-display-block -lg-display-none">-ip-col-6</p>
                <p class="-display-block -ip-display-none">-col-12</p>
            </div>
            <div class="a-box -radius  -col-12 -ip-col-6 -lg-col-4">
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
