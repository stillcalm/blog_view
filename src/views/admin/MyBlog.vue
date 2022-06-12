<template>
    <div class="edit_wrap">
        <div class="edit_head">标题</div>
        <el-input v-model="title" placeholder="请输入标题"></el-input>
        <div class="category">
            <div class="edit_head">分类</div>
            <el-checkbox-group v-model="category">
            <el-checkbox v-for="category in categorys" :label="category" :key="category">{{category}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="edit_head">
            简介
        </div>
        <el-input
            type="textarea"
            :rows="20"
            placeholder="请输入简介"
            v-model="gist">
        </el-input>
        <div class="edit_head">
            内容 (Markdown编辑器)
            </div>
        <div class="markdown">
            <mavon-editor v-model="content" />
        </div>
        <div class="foot_button">
            <div class="return_button" display:inline>
                <el-button  @click="goBack">返回</el-button>
            </div>
            <div class="save_button" display:inline>
                <el-button type="primary" @click="saveArticle">保存</el-button>
            </div>             
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gist: []
        }
    }
}
</script>



<style scoped lang='less'>
.edit_wrap{
    .return_button{
        float: left;
    }
    .save_button{
        float: right;
    }
}
</style>