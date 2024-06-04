import {defineStore} from 'pinia'

export const store = defineStore({
    id: 'store',
    state: () => ({
        products: null,
    }),
    actions: {
        // // Visits
        // visitsInSite() {
        //     let visits = JSON.parse(localStorage.getItem('visits'))
        //     if (!visits) {
        //         localStorage.setItem('visits', JSON.stringify(1));
        //         visits = 1;
        //         localStorage.setItem('basket_object', JSON.stringify([]))
        //         localStorage.setItem("basket_click_user", JSON.stringify(false))
        //         localStorage.setItem("user_id", JSON.stringify(null))
        //     } else {
        //         const newVisits = visits + 1;
        //         localStorage.setItem('visits', JSON.stringify(newVisits));
        //         visits = newVisits;
        //     }
        // },
        

    },
    getters: {},
})