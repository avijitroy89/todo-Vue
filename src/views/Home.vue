<template>
  <div class="container">
    <h2 class="header">Add new Project</h2>
    <form ref="form" @submit="addNewProject">
    <input name="name" type="text" placeholder="Project Name"/>
    <textarea name="des" type="text" placeholder="Description" />
    
    <button type="submit"  class="button"> Add Project </button>

    </form>
  </div>
</template>

<script>

import UniqueId from 'get-uid';
export default {
  name: "Home",
  data(){
    return {
    }
  },
  methods:{
    addNewProject(e) {
      e.preventDefault();
      console.log("This component's unique id is: " + UniqueId());
      let formData = {
        id: UniqueId(),
        name: this.$refs.form.name.value,
        des: this.$refs.form.des.value,
        completed: false
      }
      this.$store.commit('ADD_PROJECT', formData);
      this.$refs.form.reset();
      console.log(this.$store.state)
    }
  }

};
</script>
<style scoped>
.container{
    background: #0f2b50;
    max-width: 600px;
    width: 60%;
    min-height: 400px;
    border-radius: 5px;
    padding: 15px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: 0px 0px 5px 3px #1fa96f;  
}
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.addbtn:hover {
  background-color: #bbb;
}
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
