<template>
  <h2 class="header">Projects</h2>
    <div class="container">
    <div class="search-box">
      <input class="search" v-model="searchVal" type="text" placeholder="search">
      <span class="btn-filter" @click="ongoingTask">ongoing Task</span>
      <span class="btn-filter" @click="completedTask">Completed Task</span>
      <span class="btn-filter" @click="allTask">All Task</span>
    </div>
    
    <h2  v-if="(projects.length == 0)">Add Projects</h2>  
      <div v-for="(item, index) in filteredProjects" :key="index" >      
        <Project 
          :data=item 
          :index=item.id
         />
      </div>
    </div>
</template>

<script>
import Project from "@/components/project.vue";
import { mapGetters } from "vuex";
export default {
  name: 'projects',
  components: {
    Project,
  },
  data() {
    return {
      message: 'todoApp',
      searchVal: '',
      projects: [],
      a: true
    }
  },
  computed:{
    ...mapGetters([
      'getProjectList'
    ]),
    filteredProjects(){
      return this.projects.filter((item) =>
          item.name.toLowerCase().includes(this.searchVal.toLowerCase()))
    }

  },
  mounted() {
    this.projects = this.getProjectList;
  },
  methods: {
    ongoingTask() {
      this.projects = this.getProjectList
      this.projects = this.projects.filter((item) =>
          item.completed === false          
        ); 
      console.log('??', this.projects)
    },
    completedTask() {
      this.projects = this.getProjectList
      this.projects = this.projects.filter((item) =>
          item.completed === true          
        ); 
      console.log('??', this.projects)
    },
    allTask() {
      this.projects = this.getProjectList;
    },
  }
}
</script>

<style  scoped>
.container{  
  padding: 15px;
  max-width: 600px;
  width: 60%;
  margin: 0 auto;
}

.item:first-child{
  margin-bottom:15px;
}

input[type=text] {
  /* width: 60%; */
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
.search-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.search{
  width: 250px !important;
}
.btn-filter{
  color: #42b983;
  padding: 0 5px;
  margin-bottom: 10px;
}
</style>