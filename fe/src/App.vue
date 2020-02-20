<template>
  <main id="app">
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <form @submit.prevent="addUser">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Name" />
      <input id="submit" type="submit" value="Add" />
    </form>
  </main>
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
    addUser(event) {
      const formData = new FormData(event.target);
      fetch(`${process.env.VUE_APP_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name")
        })
      })
        .then(response => response.json())
        .then(({ user }) => {
          this.users = [...this.users, user];
        });
    }
  }
};
</script>

<style lang="scss">
label {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>
