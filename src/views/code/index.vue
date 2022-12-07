<template>
    <div>
        <prism-editor
            disabled
            class="my-editor"
            v-model="code"
            :highlight="highlighter"
            readonly
            aria-disabled
            line-numbers></prism-editor>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css' // import syntax highlighting styles
console.log(languages)
const code = ref('Reading package lists...\r\nBuilding dependency tree...')
const highlighter = (code: string) => {
    return highlight(code, languages.js)
}
</script>
<style>
.my-editor {
    background: #2d2d2d;
    color: #ccc;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
    height: 300px;
}

.prism-editor__textarea:focus {
    outline: none;
}
</style>
