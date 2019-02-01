<template>
  <div>
    <h1>My Form</h1>
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" name="name" class="form-control" v-validate="'required'" v-model="item.name" :class="{ 'is-invalid': attemptSubmit && errors.has('name') }">
            <div v-if="attemptSubmit && errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</div>
          </div>  
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Email-address:</label>
              <input type="text" name="email" class="form-control col-md-6" v-validate="'required|email'" v-model="item.email" :class="{ 'is-invalid': attemptSubmit && errors.has('email') }">
              <div v-if="attemptSubmit && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Phone Number:</label>
              <input type="text" name="number" class="form-control col-md-6" v-validate="{required:true, min:10}" v-model="item.number" :class="{ 'is-invalid': attemptSubmit && errors.has('number') }">
              <div v-if="attemptSubmit && errors.has('number')" class="invalid-feedback">{{ errors.first('number') }}</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Job Title:</label>
              <input type="text" name="title" class="form-control col-md-6" v-validate="'required'" v-model="item.title" :class="{ 'is-invalid': attemptSubmit && errors.has('title') }">
              <div v-if="attemptSubmit && errors.has('title')" class="invalid-feedback">{{ errors.first('title') }}</div>
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
          item: {},
          attemptSubmit: false,
        }
    },
    methods: {

      handleSubmit(e){
        this.attemptSubmit= true;
        this.$validator.validate().then(valid => {
          if(valid){
            let uri= 'http://localhost:4000/add';
            this.axios.post(uri,this.item).then((response)=>{
              console.log(response);
              alert("Successfully written in the database")
            })
          }
        })
      }
    }
}
</script>