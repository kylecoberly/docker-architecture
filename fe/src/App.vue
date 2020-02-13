<template>
  <div id="app">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <form @submit.prevent="addUser">
      <input type="text" name="name" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    fetch(`${process.env.VUE_APP_API_URL}/users`)
      .then(response => response.json())
      .then(({ users }) => {
        this.users = users;
      });
  },
  methods: {
    addUser(event){
      const formData = new FormData(event.target)
      fetch(`${process.env.VUE_APP_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name")
        })
      }).then(response => response.json())
      .then(({ user }) => {
        this.users = [...this.users, user];
      });
    }
  },
};
</script>

<style lang="scss"></style>
