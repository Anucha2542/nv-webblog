<template>
    <div>
        <h1>Edit Books</h1>
        <form v-on:submit.prevent = "editBook">
            <p>ชื่อหนังสือ: <input type="text" v-model="book.namebook"></p>
            <p><strong>รายละเอียด:</strong></p>
            <vue-ckeditor 
                v-model.lazy="book.details" 
                :config="config" 
                @blur="onBlur($event)" 
                @focus="onFocus($event)"
            />
            <p>ราคา: <input type="text" v-model="book.price"></p>
            <p>ประเภท: <input type="text" v-model="book.category"></p>
            <p>จำนวนหนังสือ: <input type="text" v-model="book.status"></p>
            <p>
            <button type="submit">update book</button>
            <button v-on:click="navigateTo('/books')">กลับ</button>
            </p>
        </form>
        <!-- แถบล่าง -->
 <div class="blog-load-finished">--- zombie book ---</div>
    </div>
</template>
<script>
import BooksService from '@/services/BooksService'
import VueCkeditor from "vue-ckeditor2"

export default {
    components: { VueCkeditor },
    data () {
        return {
            book: {
                namebook: '',
                thumbnail: 'null',
                pictures: [],
                category: '',
                detail: '',
                price: '',
                status: ''
            },
            config: {
                toolbar: [
                    ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript']
                ],
                height: 300
            },
        }
    },
    methods: {
        async editBook () {
            try {
                await BooksService.put(this.book)
                this.$router.push({
                    name: 'books'
                })
            } catch (err) {
                console.log(err)
            }
        }

    },
    async created () {
        try {
            let bookId = this.$route.params.bookId
            this.book = (await BooksService.show(bookId)).data
            this.config.toolbar = [
                {
                    name: "document",
                    items: [
                        "Source",
                        "-",
                        "Save",
                        "NewPage",
                        "Preview",
                        "Print",
                        "-",
                        "Templates"
                    ]
                },
                {
                    name: "clipboard",
                    items: [
                        "Cut",
                        "Copy",
                        "Paste",
                        "PasteText",
                        "PasteFromWord",
                        "-",
                        "Undo",
                        "Redo"
                    ]
                },
                {
                    name: "editing",
                    items: ["Find", "Replace", "-", "SelectAll", "-", "Scayt"]
                },
                {
                    name: "forms",
                    items: [
                        "Form",
                        "Checkbox",
                        "Radio",
                        "TextField",
                        "Textarea",
                        "Select",
                        "Button",
                        "ImageButton",
                        "HiddenField"
                    ]
                },
                "/",
                {
                    name: "basicstyles",
                    items: [
                        "Bold",
                        "Italic",
                        "Underline",
                        "Strike",
                        "Subscript",
                        "Superscript",
                        "-",
                        "CopyFormatting",
                        "RemoveFormat"
                    ]
                },
                {
                    name: "paragraph",
                    items: [
                        "NumberedList",
                        "BulletedList",
                        "-",
                        "Outdent",
                        "Indent",
                        "-",
                        "Blockquote",
                        "CreateDiv",
                        "-",
                        "JustifyLeft",
                        "JustifyCenter",
                        "JustifyRight",
                        "JustifyBlock",
                        "-",
                        "BidiLtr",
                        "BidiRtl",
                        "Language"
                    ]
                },
                { name: "links", items: ["Link", "Unlink", "Anchor"] },
                {
                    name: "insert",
                    items: [
                        "Image",
                        "Flash",
                        "Table",
                        "HorizontalRule",
                        "Smiley",
                        "SpecialChar",
                        "PageBreak",
                        "Iframe",
                        "InsertPre"
                    ]
                },
                "/",
                { name: "styles", items: ["Styles", "Format", "Font", "FontSize"]
                },
                { name: "colors", items: ["TextColor", "BGColor"] },
                { name: "tools", items: ["Maximize", "ShowBlocks"] },
                { name: "about", items: ["About"] }
            ]
        } catch (error) {
            console.log (error)
        }
    },
    onBlur (editor) {
        console.log(editor);
    },
    onFocus (editor) {
        console.log(editor);
    },


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