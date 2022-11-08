import axios from "axios";
// axios 통신 공통함수
export default {
    methods: {
        async $connect(contentType, url, method, data) {
            return (
                await axios({
                    headers: {
                        "Content-Type": 'application/json',
                    },
                    url: url,
                    method: method,
                    data: data,
                }).catch((e) => {
                    console.log(e);
                })
            ).data;
        }
    }
}