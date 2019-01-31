<template>
  <div>
    <h1>My Form</h1>
    <form v-on:submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="item.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Email-address:</label>
              <input type="email" class="form-control col-md-6" v-model="item.email">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Phone Number:</label>
              <input type="text" class="form-control col-md-6" v-model="item.number">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Job Title:</label>
              <input type="text" class="form-control col-md-6" v-model="item.title">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Submit</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'info',
    data(){
        return{
          item:{}
        }
    },
    methods: {
      submitForm(){
        let uri = 'http://localhost:4000/add';
        this.axios.post(uri, this.item).then((response) => {
          console.log(response);
        })
      }
}
}
</script>