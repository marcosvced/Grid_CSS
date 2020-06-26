const OHeader = Vue.component('o-header', {
    template: `
     <header class="o-header -md-position-sticky">
        <div class="m-header__wrapper -container -display-row -justify-between">
            <div class="a-logo__icon" @click="scrollToTop"></div>
            <ul class="m-nav -position-fixed -col-12 -md-position-static -md-fit-content">
                <li class="a-nav__item" data-item="layout" @click="scrollTo(layout)">
                    <i class="a-icon -layers"></i>
                    <span>Layout</span>
                </li>
                <li class="a-nav__item" data-item="responsive" @click="scrollTo(responsive)">
                     <i class="a-icon -grid"></i><span>Responsive</span>
                </li>
                <li class="a-nav__item" data-item="modifiers" @click="scrollTo(modifiers)">
                     <i class="a-icon -tool"></i><span>Modifiers</span>
                </li>
            </ul>
        </div>
    </header>
    `,
    mounted: function () {
        self.addEventListener("scroll", () => {
            const items = document.querySelectorAll('.o-header .m-nav .a-nav__item');
            items.forEach(item => {
                let isOnScreen = this.isOnScreen(item);
                if (isOnScreen) {
                    item.classList.add('-item-active');
                } else {
                    item.classList.remove('-item-active');
                }
            });
            this.isDarkBackground();
        })
    },
    methods: {
        isOnScreen: function (item) {
            const element = document.querySelector(`#${item.getAttribute('data-item')}`)
            return element.getBoundingClientRect().top <= (self.innerHeight / 2) && element.getBoundingClientRect().bottom >= (self.innerHeight / 2);
        },
        isDarkBackground: function () {
            const item = document.querySelector('.o-hero');
            const header = document.querySelector('.o-header');
            if (item.getBoundingClientRect().bottom <= header.offsetHeight) {
                header.classList.add('-background-dark');
            } else {
                header.classList.remove('-background-dark');
            }
        },
        scrollTo: function (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })

        },
        scrollToTop: function () {
            document.scrollingElement.scroll({top:0, behavior: 'smooth',})
        }
    }
})
