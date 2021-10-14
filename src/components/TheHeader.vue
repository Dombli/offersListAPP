<template>
  <div>
    <header>
      <ul>
        <li>
          <router-link to="/OffersList">
            Offers
          </router-link>
        </li>
        <li>
          <router-link to="/Clients">
            Clients
          </router-link>
        </li>
      </ul>
    </header>
    <div id="lowheader">
      <h1>
        <router-link to="/">
          OFFERS LIST APP
        </router-link>
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

#lowheader {
  width: 100%;
  height: 8rem;
  position: relative;
  bottom: 10px;
  display: flex;
  justify-content: left;
  padding-left: 30px;
  align-items: top;
  background-color: #153B50;
  color: #EFE5DC;
}

#lowheader a {
  text-decoration: none;
}

header {
  border-radius: 10px;
  width: 100%;
  height: 8rem;
  color: #f8f0fb;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 2rem;
  background-color: #153B50;
  // margin: 1rem 10%;
  // box-shadow: 9px 5px 17px 0px rgba(0,0,0,0.44);
}

header a {
  text-decoration: none;
  color: #f8f0fb;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}
a:hover,
a:active {
  border: 1px solid white;
  border-radius: 5px;
}

a.router-link-active {
  border: 1px solid white;
  background-color: #429EA6;
  border-radius: 5px;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
}

h1 a {
  color: #f8f0fb;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
  // background-color: #f391e3;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.8rem;
  border: 0.5px solid white;
  border-radius: 5px;
  background-color: rgba(33, 154, 163, 0.2);
}
</style>
