Vue.prototype.$http = axios;
new Vue({
    el: '#app',
    components: {
        OHeader,
        OHero,
        OTargets,
        OGutter,
        ONoGutter,
        OBreakpoints,
        OWrap,
        OFlexModifiers,
        OGapWrap,
        OFooter
    }
})
