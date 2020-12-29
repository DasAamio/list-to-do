export default {
    methods: {
        _getCustomTimeToMillis(dateString) {
            console.log('dateString', dateString)
            let d = this.moment(dateString).toDate()
            return d.getTime()
        },
        _getCustomTimeFromMillis(dateMilli) {
            console.log('dateMilli', dateMilli)
            // let d = this.moment(dateMilli).toDate()
            return this.moment(dateMilli).format("YYYY-MM-DD hh:mm")
        }
    }
}