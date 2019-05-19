import Api from "@/services/Api";

export default {
 postData(page: any, data: any) {

    return Api().post(page, data);
  },
  getData(page: any) {
    return Api().get(page);
  },
}