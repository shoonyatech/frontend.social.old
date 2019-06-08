import Api from "@/services/Api";
export default {
    postData(page, data) {

        return Api().post(page, data)
    },
    getData(page) {
        return Api().get(page)
    },
    getUserData(page, auth) {
        return Api().get(page, auth)
    },
    updateUserData(page, data, auth) {
        return Api().put(page, data, auth)
    },
    userimage(page, data, auth) {
        return Api().put(page, data, auth)
    },
}