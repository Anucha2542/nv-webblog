<template>
<div class="bg">.
        <div class="blog-header">
 <h2>BOOKS LIST</h2>
 <div>
 <form>
 <input type="text" v-model="search" placeholder="Search">
 </form>
</div>
 <div>
 <button v-on:click="navigateTo('/book/create')">Create Books </button>
 <strong> จํานวนหนังสือ : </strong> {{books.length}}</div>
 <br>
 </div>
 <div v-if="books.length === 0" class="empty-blog">
 *** ไม่มีขอมูล ***
 </div>
 <div v-for="book in books" v-bind:key="book.id" class="blog-list">
 <!-- <p>id: {{ blog.id }}</p> -->
 <div class="blog-pic">
 <transition name="fade">
 <div class="thumbnail-pic" v-if="book.thumbnail != 'null'">
 <img :src="BASE_URL+book.thumbnail" alt="thumbnail">
 </div>
 </transition>
 </div>
 <h3>{{ book.namebook }}</h3>
 <div class="blog-info">
 <p><strong>ประเภท:</strong> {{ book.category }}</p>
 <p><strong>ราคา:</strong> {{ book.price }}</p>
 <p><strong>Create:</strong> {{ book.createdAt }}</p>
 <!-- <p>status: {{ blog.status }}</p> -->
 <p>
 <button v-on:click="navigateTo('/book/'+ book.id)">ดูหนังสือ</button>
 <button v-on:click="navigateTo('/book/edit/'+ book.id)">แก้ไขหนังสือ</button>
 <button v-on:click="deleteBook(book)">ลบข้อมูล</button>
 </p>
 </div>
 <div class="clearfix"></div>
 </div>
<!-- แถบล่าง -->
 <div class="blog-load-finished">--- zombie book ---</div>

 </div>
</template>
<script>
    import BooksService from '@/services/BooksService'
    export default {
        data () {
            return {
                books: [],
                BASE_URL: "http://localhost:8081/assets/uploads/",
                pictures: [],
            }
            
        },
        async created () {
            this.books = (await BooksService.index()).data
        },
        methods: {
            logout () {
                this.$store.dispatch('setToken', null)
                this.$store.dispatch('setBlog', null)
                this.$router.push({
                    name: 'login'
                })
            },
            navigateTo (route) {
                this.$router.push(route)
            },
            async deleteBook (book) {
                let result = confirm("Want to delete?")
                if (result) {
                    try {
                        await BooksService.delete(book)
                        this.refreshData()
                    } catch (err) {
                        console.log(err)
                    }
                }
            },
            async refreshData() {
                this.books = (await BooksService.index()).data
            }
        }
    }
</script>
<style scoped>
.empty-blog {
 width: 100%;
 text-align: center;
 padding:10px;
 background:darksalmon;
 color:white;
}
/* thumbnail */
.thumbnail-pic img{
 width: 200px;
 padding: 5px 10px 0px 0px;
}
.blog-info {
 float: left;
}
.blog-pic {
 float: left;
}
.clearfix {
 clear: both;
}
.blog-list {
 border:solid 1px #dfdfdf;
 margin-bottom: 10px;
 max-width: 900px;
 margin-left: auto;
 margin-right: auto;
 padding: 5px;
 box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
}
.blog-header {
 max-width: 900px;
 margin-left: auto;
 margin-right: auto;
}
/*แถบล่าง*/
.blog-load-finished {
  padding: 4px;
  text-align: center;
  background: black;
  color: white;
}
.bg{
    background-color:skyblue;
}
</style>