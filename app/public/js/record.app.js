var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient:{
      firstname:'',
      lastname:'',
      dob:'',
      SAB:'',
    },
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json })
    },
    handleCreaterRecord(event) {
      this.patients.push(this.formPatient);

      this.formPatient = {
          firstname:'',
          lastname:'',
          dob:'',
          SAB:''
        }
    }
  }
});
