Vue.createApp({
    data() {
        return {
            name: null,
            animal: 'bat',
            users: [
                {name: 'Alex', hobbies: ['coding', 'movies', 'techno party', 'boardgames']},
                {name: 'Rolf', hobbies: ['golf', 'food', 'dancing']},
                {name: 'Maria', hobbies: ['coding', 'swimming', 'boardgames']}
              ]
        }
    },
}).mount('#app')