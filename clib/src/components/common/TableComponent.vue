<template>
  <table>
    <tr>
      <th v-for="col in columnHead" :key="col">{{ col }}</th>
    </tr>
    <tbody id="tableRow" v-for="item in rowData" :key="item">
      <tr>
        <td rowspan="2">{{ item.index }}</td>
        <td rowspan="2">{{ item.ServID }}</td>
        <td rowspan="2">{{ item.CustID }}</td>
        <td rowspan="2">{{ item.SubsID }}</td>
        <td rowspan="2">{{ item.CustName }}</td>
        <td rowspan="2">{{ item.ProductName }}</td>
        <td>{{ item.ServState }}</td>
        <td>{{ item.SubsState }}</td>
        <td>{{ item.StartDate }}</td>
        <td>{{ item.EndDate }}</td>
      </tr>
      <tr>
        <td colspan="4" class="subsOptions">
          <link-component :destination="''" :linkNm="item.options" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import linkComponent from "./linkComponent.vue";
export default {
  components: { linkComponent },
  data() {
    return {
      columnHead: [
        "순서",
        "서비스계약ID",
        "고객ID",
        "청구계정ID",
        "고객명",
        "상품명",
        "서비스계약 상태",
        "청약상태",
        "개통일시",
        "정지/해제일시",
      ],
      rowData: [
        {
          index: 1,
          ServID: "S000008950",
          CustID: "C000053211",
          SubsID: "P000021351",
          CustName: "홍길동",
          ProductName:
            "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",
          ServState: "정지",
          SubsState: "청약완료",
          StartDate: new Date().toLocaleString(),
          EndDate: new Date("2022-12-31").toLocaleString(),
          options: "abcd",
        },
        {
          index: 2,
          ServID: "S000008951",
          CustID: "C000053212",
          SubsID: "P000021352",
          CustName: "홍길동",
          ProductName:
            "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",
          ServState: "정지",
          SubsState: "청약완료",
          StartDate: new Date().toLocaleString(),
          EndDate: new Date("2022-12-31").toLocaleString(),
          options: "abcd",
        },
        {
          index: 3,
          ServID: "S000008952",
          CustID: "C000053213",
          SubsID: "P000021353",
          CustName: "홍길동",
          ProductName:
            "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",
          ServState: "정지",
          SubsState: "청약완료",
          StartDate: new Date().toLocaleString(),
          EndDate: new Date("2022-12-31").toLocaleString(),
          options: "abcd",
        },
        {
          index: 4,
          ServID: "S000008953",
          CustID: "C000053214",
          SubsID: "P000021354",
          CustName: "홍길동",
          ProductName:
            "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",
          ServState: "정지",
          SubsState: "청약완료",
          StartDate: new Date().toLocaleString(),
          EndDate: new Date("2022-12-31").toLocaleString(),
          options: "abcd",
        },
        {
          index: 5,
          ServID: "S000008954",
          CustID: "C000053215",
          SubsID: "P000021355",
          CustName: "홍길동",
          ProductName:
            "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",
          ServState: "정지",
          SubsState: "청약완료",
          StartDate: new Date().toLocaleString(),
          EndDate: new Date("2022-12-31").toLocaleString(),
          options: "abcd",
        },
        {
          index: 6,
          ServID: "S000008955",
          CustID: "C000053216",
          SubsID: "P000021356",
          CustName: "홍길동",
          ProductName:
            "[IDC]kt cloud SSD 컴퓨팅 스토리지 서버리스 애플리케이션",
          ServState: "정지",
          SubsState: "청약완료",
          StartDate: new Date().toLocaleString(),
          EndDate: new Date("2022-12-31").toLocaleString(),
          options: "abcd",
        },
      ],
    };
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
table {
  border: 1px solid #bdbdbd;
  border-collapse: collapse;
  /* background-color: rgb(239, 245, 252); */
}

table > tr > th {
  border: 0.5px solid #bdbdbd;
  background-color: rgb(239, 245, 252);
}
table > tbody {
  height: 60px;
}
table > tbody:hover {
  background-color: rgb(255, 254, 238);
}
table > tbody > tr > td {
  border: 0.5px solid #bdbdbd;
  text-align: center;
  font-size: 10pt;
}
table > tbody > tr > td:nth-child(1) {
  width: 45px;
}
table > tbody > tr > td:nth-child(2),
table > tbody > tr > td:nth-child(3),
table > tbody > tr > td:nth-child(4) {
  width: 90px;
}
table > tbody > tr > td:nth-child(5) {
  width: 60px;
}
table > tbody > tr > td:nth-child(6) {
  width: 500px;
}
table > tbody > tr > td:nth-child(7) {
  width: 80px;
}
table > tbody > tr > td:nth-child(8) {
  width: 65px;
}
table > tbody > tr > td:nth-child(9),
table > tbody > tr > td:nth-child(10) {
  width: 100px;
  font-size: 9pt;
}
table > tbody > tr:nth-child(2) > td {
  background-color: rgb(248, 248, 248, 0.35);
}
table > tbody > tr:nth-child(2) > td > div > a {
  color: blue;
  text-decoration: underline;
}
</style>
