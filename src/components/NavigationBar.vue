<template>
<nav class="navbar">
  <ul>
    <li>
      <a>
        <router-link to="/">Home</router-link>
      </a>
    </li>
    <li>
      <a>
        <router-link to="/about">About</router-link>
      </a>
    </li>
  </ul>
</nav>
</template>

<style>
a {
  text-decoration: none;
}

.navbar {
  background-color: #5b15bd;
  display: block;
  align-items:center;
}

.navbar a {
  color: #e7e7e7;
}

.navbar ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items:center;
  justify-content: flex-start;
}

.navbar ul li a {
  color: #e7e7e7;
  padding: 12px;
  display: block;
}

.navbar ul a:hover{
  background-color: #b045da;
}
</style>