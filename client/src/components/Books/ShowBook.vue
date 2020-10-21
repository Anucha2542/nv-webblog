<template>
    <div>
        <h1>Show Book</h1>
         <center><transition name="fade">
 <div class="thumbnail-pic" v-if="book.thumbnail != 'null'">
 <img :src="BASE_URL+book.thumbnail" alt="thumbnail">
 </div>
 </transition></center>
        <p>id: {{ book.id }}</p>
        <p>ชื่อหนังสือ: {{ book.namebook }}</p>
        <p>รายละเอียด: {{ book.details }}</p>
        <p>ประเภท: {{ book.category }}</p>
        <p>ราคา: {{ book.price }}</p>
        <p>จำนวนหนังสือ: {{ book.status }}</p>
        <p>
        <button v-on:click="navigateTo('/book/edit/'+ book.id)">แก้ไข
        book</button>
        <button v-on:click="navigateTo('/books')">กลับ </button>
        </p>
        <!-- แถบล่าง -->
 <div class="blog-load-finished">--- zombie book ---</div>
    </div>
</template>
<script>
    import BooksService from '@/services/BooksService'
    export default {
        data () {
            return {
                book: null,
                BASE_URL: "http://localhost:8081/assets/uploads/",
            }
        },
        async created () {
            try {
                let bookId = this.$route.params.bookId
                this.book = (await BooksService.show(bookId)).data
            } catch (error) {
                console.log (error)
            }
        },
        methods : {
            navigateTo (route) {
                this.$router.push(route)
            },
        }
    }
</script>
<style scoped>
/*แถบล่าง*/
.blog-load-finished {
  padding: 4px;
  text-align: center;
  background: black;
  color: white;
}
</style>