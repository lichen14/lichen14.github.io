const app = new Vue({
    el: '#app',
    data: {
        hoverId: -1,
        years: [],
        selectedYear: 'All'
    },
    created: function () {
        console.log("READY");
        for (publication of publications) {
            // console.log(publication.year);
            if (!this.years.includes(publication.year)) {
                this.years.push(publication.year);
            }
        }
    },
    methods: {}
});