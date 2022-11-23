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
                })
            )
        },
        // 오늘 날짜 계산 YYYY.MM.DD
        calToday() {
            let today = new Date();

            let year = today.getFullYear();
            let month =
                today.getMonth() + 1 >= 10
                    ? today.getMonth() + 1
                    : "0" + (today.getMonth() + 1);
            let date = today.getDate() >= 10 ? today.getDate() : "0" + today.getDate();

            return year + "." + month + "." + date;
        },
        // 오늘 월 계산 YYYY-MM
        calTodayMonth() {
            let today = new Date();

            let year = today.getFullYear();
            let month =
                today.getMonth() + 1 >= 10
                    ? today.getMonth() + 1
                    : "0" + (today.getMonth() + 1);

            return year + "-" + month;
        },
        // 날짜 차이 계산
        diffDate(st, fns) {
            st = new Date(st);
            fns = new Date(fns);
            if (st == null || fns == null) return null;
            let stYear = st.getFullYear();
            let stMonth = st.getMonth();
            let stDate = st.getDate();

            let fnsYear = fns.getFullYear();
            let fnsMonth = fns.getMonth();
            let fnsDate = fns.getDate();

            let newSt = new Date(stYear, stMonth, stDate);
            let newFns = new Date(fnsYear, fnsMonth, fnsDate);
            return Math.ceil(
                (new Date(newFns).getTime() - new Date(newSt).getTime()) /
                (1000 * 3600 * 24)
            );
        },
        //같은 달인지 확인
        sameMonth(mon1, mon2) {
            if (mon1 == null || mon2 == null) return false;

            mon1 = new Date(mon1);
            mon2 = new Date(mon2);

            let year1 = mon1.getFullYear();
            let month1 = mon1.getMonth();

            let year2 = mon2.getFullYear();
            let month2 = mon2.getMonth();

            if (year1 == year2 && month1 == month2) return true;
            else return false;
        }
    }
}