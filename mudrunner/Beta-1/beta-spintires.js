let films = [{
    name: 'C-255',
    image: "c255.png",
    about: "⭐⭐⭐",
    // link: "https//file:///D:/games/github/rr-kitty.github.io/mudrunner/truck-1.html",
    description: "Легендарный военный грузовик - КрАЗ-255. Имеет полный привод (6х6), блокировку дифф. Его приемущества: большие колёса для бездорожья, не очень большой расход топлива, перевозит длинные брёвна. Рекомендуется брать для сложного бездорожья (болота, реки, скалы).",
},
{
    name: "B-131",
    image: "B131.png",
    about: "⭐⭐",
    description: "Старый советский военный грузовик. Имеет полный привод (6х6), возможность блокировки дифф. Хороший выбор для труднопроходимых мест.",
},
{
    name: "С-256",
    image: "c256.jpg",
    about: "⭐",
    description: "Гражданский советский грузовик. Не имеет полного привода (6х4), но есть возможность блокировки дифф. Это отличный выбор, если вы собрались проходить карты с 1 звездой балланса. Имеет свой кран, может перевозить средние брёвна.",
},
{
    name: "C-260",
    image: "c260.jpg",
    about: "⭐⭐⭐",
    description: "КрАЗ-260 - отличное авто. Имеет полный привод (6х6), блокировку дифф., большие колёса и мощь. Может проходить в непроходимых местах, отлично ездит по скалистой местности и может перевозить длинные брёвна.",
},
{
    name: "С-4320",
    image: "с4320.jpg",
    about: "⭐⭐⭐",
    description: "Старый советский грузовик с полным приводом (6х6) и блокировкой дифф. Имеет большие колёса, мощный двигатель и неплохой запас топлива. Подходит для бездорожья и скал.",
},
{
    name: "С-43010",
    image: "c432010.jpg",
    about: "⭐⭐⭐",
    description: "Старый советский грузовик с полным приводом (6х6) и блокировкой дифф. Имеет большие колёса, мощный двигатель и неплохой запас топлива. Подходит для бездорожья и скал. Имеет больший клиренс и поворот колёс.",
}]

let myfilm = {
    data() {
        return {
            films: films,
            search: "",
            currentIndex: -1,
            showWindow: -1,
        }
    },
    methods: {
        modalShow(index) {
            this.currentIndex = index;
        },
        modalHide() {
            this.currentIndex = -1;
        },
        showNewWindow(index) {
            this.showWindow = index;
        },
        hideNewWindow(index) {
            this.showWindow = -1;
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