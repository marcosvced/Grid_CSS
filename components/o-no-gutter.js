const ONoGutter = Vue.component('o-no-gutter', {
    template: `
    <section class="o-no-gutter -container -mb-4 -md-mb-7">
        <header class="m-header -col-12 -mb-2">
            <h2 class="a-header__tile">Grid layout</h2>
             <p class="a-header__description -col-12 -lg-col-9">
                The default grid is a twelve column fluid grid.<br>
                You can use a <code class="a-code -code-inline">o-container</code> or <code class="a-code -code-inline">-contianer</code> css class which add a with of 1366px that shrinks with the browser or device at smaller sizes.
                The max width can be changed with the variable CSS <code class="a-code -code-inline">--container-size</code> and all columns will resize according to it.
             </p>
        </header>
        <div class="m-grid-wrapper -display-row">
            <div class="a-box -bordered -col-12">
                <p>-col-12</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row">
            <div class="a-box -bordered -col-6 -xsm-col-5 -sm-col-4 -md-col-3 -ip-col-2 -lg-col-1">
                <p>-col-1</p>
            </div> 
            <div class="a-box -bordered -col-6 -xsm-col-7 -sm-col-8 -md-col-9 -ip-col-10 -lg-col-11">
                <p>-col-11</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row">
            <div class="a-box -bordered -col-7 -xsm-col-6 -sm-col-5 -md-col-4 -ip-col-3 -lg-col-2">
                <p>-col-2</p>
            </div>
            <div class="a-box -bordered -col-5 -xsm-col-6 -sm-col-7 -md-col-8 -ip-col-9 -lg-col-10">
                <p>-col-10</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row">
            <div class="a-box -bordered -col-8 -xsm-col-7 -sm-col-6 -md-col-5 -ip-col-4 -lg-col-3">
                <p>-col-3</p>
            </div>
            <div class="a-box -bordered -col-4 -xsm-col-5 -sm-col-6 -md-col-7 -ip-col-8 -lg-col-9">
                <p>-col-9</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row">
            <div class="a-box -bordered -col-9 -xsm-col-8 -sm-col-7 -md-col-6 -ip-col-5 -lg-col-4">
                <p>-col-4</p>
            </div>
            <div class="a-box -bordered -col-3 -xsm-col-4 -sm-col-5 -md-col-6 -ip-col-7 -lg-col-8">
                <p>-col-8</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row">
            <div class="a-box -bordered -col-10 -xsm-col-9 -sm-col-8 -md-col-7 -ip-col-6 -lg-col-5">
                <p>-col-5</p>
            </div>
            <div class="a-box -bordered -col-2 -xsm-col-3 -sm-col-4 -md-col-5 -ip-col-6 -lg-col-7">
                <p>-col-7</p>
            </div>
        </div>
        <div class="m-grid-wrapper -display-row">
            <div class="a-box -bordered -col-11 -xsm-col-10 -sm-col-9 -md-col-8 -ip-col-7 -lg-col-6">
                <p>-col-6</p>
            </div>
            <div class="a-box -bordered -col-1 -xsm-col-2 -sm-col-3 -md-col-4 -ip-col-5 -lg-col-6">
                <p>-col-6</p>
            </div>
        </div>
        <div class="m-text__wrapper -pt-5">
            <p class="a-gutter__text">
                To use the <code class="a-code -code-inline">-col-</code> modifier it is not necessary to have a parent modifier of <code class="a-code -code-inline">-display-row</code> type <br/>
                but you can use the modifier <code class="a-code -code-inline">-display-row</code> to display the columns as a Flex-box row.
            </p>
        </div>
        <pre>
            <code class="-markup" contenteditable="false" spellcheck="false">
&lt;div class="-display-row">
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
