<template>
  <div class="item" :class="[data.completed ? 'completed' :  '']">
    <div v-html=data.name></div>
    <div>          
    <ion-icon :class="[data.completed ? 'completed icon md hydrated' :  'icon md hydrated']" @click="completedProject(index)" name="checkmark"></ion-icon>
    <ion-icon class="icon" @click="deleteProject(index)" name="trash"></ion-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  props: {
    data: Object,
    index: Number
  },
  methods: {
    deleteProject(e){
      this.$store.commit('DELETE_PROJECT', e);
    },   
    completedProject(e){
      this.$store.commit('UPDATE_PROJECT_STATUS', e);
    }
  }
};
</script>

<style scoped>

.item{    
  display: flex;
  justify-content: space-between;
  background-color: #2f4665;
  line-height: 60px;
  font-size: 20px;
  color: white;
  box-shadow: 0px 0px 5px 3px #d30101;
  padding: 0 15px;
  border-radius: 5px;
}
.completed{
  box-shadow: 0px 0px 5px 3px #1fa96f;  

}
.completed>.icon{
    color: #1fa96f;
  }

.icon{
    margin: 0 10px;
  }
</style>
