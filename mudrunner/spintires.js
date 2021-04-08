let films = [{
    name: 'C-255',
    image: "c255.png",
    about: "⭐⭐⭐",
    description: "mueras",
},
{
    name: "B-131",
    image: "b131.png",
    about: "⭐⭐",
    description: "Old Soviet 6x6 truck. Has AWD and diff lock option. This is an powerfull truck that can carry 4 load points.",
},
{
    name: "С-256",
    image: "c256.jpg",
    about: "⭐",
    description: "Old Soviet 6x4 truck. Has a diff lock option. This is a good truck to '1 star' challanges.",
}]

let myfilm = {
    data() {
        return {
            films: films,
            search: "",
            currentIndex: -1,
        }
    },
    methods: {
        modalShow(index) {
            this.currentIndex = index;
        },
            modalHide() {
            this.currentIndex = -1;
        }
    },
    computed: {
        myFilter() {
            let searchString = this.search;
            if (!searchString) {
                return this.films;
            }
            searchString = searchString.trim().toLowerCase();
            return this.films.filter(item => {
                if (item.name.toLowerCase().indexOf(searchString) !== -1) {
                    return item;
                }
            })
        }
    }
}
Vue.createApp(myfilm).mount('#film-app');