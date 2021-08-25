const section = Vue.createApp({
    data() {
        return {
            showSection: false,
            buildingID: 'D01',
            buildingName: 'Building 01', 
            buildingCity: 'Dubai'
        }
    },
    methods: {
        toggleShowSection() {
            this.showSection = !this.showSection
        }
    }
})

section.mount('#section')
