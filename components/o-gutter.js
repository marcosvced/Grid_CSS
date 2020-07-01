const OGutter = Vue.component('o-gutter', {
    template: `
    <section class="o-gutter -container -mb-4 -md-mb-7">
        <header class="m-header -col-12 -mb-4">
            <h2 class="a-header__tile">Grid with gap</h2>
            <p class="a-header__description -col-12 -lg-col-7">
                By default the grid doesn't have a gutter but to space the columns Aguia has the modifier <code class="a-code -code-inline">-gap</code> which add a gap o .75rem between columns.
            </p>
        </header>
        <div class="m-grid-wrapper -display-row -gap">
            <div class="a-box -radius -col-12">
                <p>-col-12</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row -gap">
            <div class="a-box -radius -col-6 -xsm-col-5 -sm-col-4 -md-col-3 -ip-col-2 -lg-col-1">
                <p>-col-1</p>
            </div> 
            <div class="a-box -radius -col-6 -xsm-col-7 -sm-col-8 -md-col-9 -ip-col-10 -lg-col-11">
                <p>-col-11</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row -gap">
            <div class="a-box -radius -col-7 -xsm-col-6 -sm-col-5 -md-col-4 -ip-col-3 -lg-col-2">
                <p>-col-2</p>
            </div>
            <div class="a-box -radius -col-5 -xsm-col-6 -sm-col-7 -md-col-8 -ip-col-9 -lg-col-10">
                <p>-col-10</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row -gap">
            <div class="a-box -radius -col-8 -xsm-col-7 -sm-col-6 -md-col-5 -ip-col-4 -lg-col-3">
                <p>-col-3</p>
            </div>
            <div class="a-box -radius -col-4 -xsm-col-5 -sm-col-6 -md-col-7 -ip-col-8 -lg-col-9">
                <p>-col-9</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row -gap">
            <div class="a-box -radius -col-9 -xsm-col-8 -sm-col-7 -md-col-6 -ip-col-5 -lg-col-4">
                <p>-col-4</p>
            </div>
            <div class="a-box -radius -col-3 -xsm-col-4 -sm-col-5 -md-col-6 -ip-col-7 -lg-col-8">
                <p>-col-8</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row -gap">
            <div class="a-box -radius -col-10 -xsm-col-9 -sm-col-8 -md-col-7 -ip-col-6 -lg-col-5">
                <p>-col-5</p>
            </div>
            <div class="a-box -radius -col-2 -xsm-col-3 -sm-col-4 -md-col-5 -ip-col-6 -lg-col-7">
                <p>-col-7</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row -gap">
            <div class="a-box -radius -col-11 -xsm-col-10 -sm-col-9 -md-col-8 -ip-col-7 -lg-col-6">
                <p>-col-6</p>
            </div>
            <div class="a-box -radius -col-1 -xsm-col-2 -sm-col-3 -md-col-4 -ip-col-5 -lg-col-6">
                <p>-col-6</p>
            </div>
        </div>
        <div class="m-text__wrapper -pt-5">
            <p class="a-gutter__text">
                It must be use at the same level of <code class="a-code -code-inline">-display-row</code> or <code class="a-code -code-inline">-display-row-reverse</code>
            </p>
        </div>
        <pre class="-mb-4">
            <code class="-markup" contenteditable="false" spellcheck="false">
&lt;div class="-display-row -gap">
    &lt;div class="-col-1">
        &lt;p>-col-1&lt;/p>
    &lt;/div> 
    &lt;div class="-col-11">
        &lt;p>-col-11&lt;/p>
    &lt;/div>
&lt;/div>
            </code>            
        </pre>
    </section>
    `
})
