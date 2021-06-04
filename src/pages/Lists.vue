<template>
  <Layout>
    <h1>Lists</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <ul>
      <li v-for="list in $page.lists.edges" :key="list.node.id">
        <g-link :to="list.node.path">{{ list.node.title }}</g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query {
  lists: allListItems {
    edges {
      node{
        title
        pageTitle
        fileInfo{
          name
        }
        date(format: "DD-MM-YYYY")
        content
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'List-Page',
  metaInfo: {
    title: 'lists | leininger.tech'
  }
}
</script>
