const baseUrl = "http://localhost:15814/api/MusicRecords"

Vue.createApp({
    data(){
        return{
            musicRecords:[],
        }
    },
    methods: { 
        async helperGetandShow(url){
            try {
                const response = await axios.get(url)
                this.musicRecords = await response.data
            }
            catch(ex){
                alert(ex.message)
            }
        },
        getAllMusicRecords(){
            this.helperGetandShow(baseUrl)
        },
    }
})