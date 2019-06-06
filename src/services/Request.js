import Api from "@/services/Api";
console.log(Api)
export default {
    postData(page, data) {

        return Api().post(page, data)
    },
    getData(page) {
        console.log('d', Api);
        return Api().get(page)
    },
}