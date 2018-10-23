<template>
    <div class='app'>
        <div class='app_header'>
            <h3>PC端演示首页</h3>
        </div>
        <div class='app_main'>
            <div class='app_main__search'>
                <Input class='app_main__search__input' size='large' placeholder='输入用户名查找' v-model='params.name'></Input>
                <Button @click='loadData'>搜索</Button>
            </div>
            <Table :columns="columns" :data="users"></Table>
            <Button class='app_main__add' @click='showAdd' type="primary">新增</Button>
            <warning />
            <!-- 使用的时候，名称要与Vue.component一致（不区分大小写） -->
        </div>
    </div>
</template>

<script>
    import {Button, Table, Input, Message} from 'iview'
    import {queryUsers} from '@/services/user.service'

    export default {
        data: () => ({
            columns: [
                {
                    title: '姓名',
                    key: 'name'
                },
                {
                    title: '年龄',
                    key: 'age'
                },
                {
                    title: '地址',
                    key: 'address'
                }
            ],
            params: { // 查詢條件
                name: ''
            },
            users: []
        }),
        methods: {
            loadData () {
                queryUsers(this.params).then(data => {
                    this.users = data
                }).catch(e => {
                    console.error(e.message)
                    this.$Message.error('获取列表失败，使用假数据！');
                    // 失败则使用假数据
                    this.users = [{
                        name: '张三',
                        age: 20,
                        address: '南京江宁'
                    }]
                })
            },
            showAdd () {
                alert('add')
            }
        },
        created () {
            this.loadData()
        },
        components: {
            Button,
            Table,
            Input
        }
    }
</script>

<style lang="less" scoped>
    @import '~@/assets/styles/common.less';
  
    .app {
        padding: 1.0rem;
    }

    .app_main {
        margin-top: 1.0rem;
    }

    .app_main__search {
        margin-bottom: 1.0rem;
        display: flex;
    }

    .app_main__search__input {
        width: 15.0rem;
        margin: 0 0.5rem;
    }

    .app_main__add {
        float: right;
        margin-top: 1.0rem;
    }

</style>

<style type="text/css">
    html {
        height: 100%; 
        font-size: 20px;
    }

    body, #app {
        height: 100%; 
        color: #333; 
        padding: 0; 
        margin: 0; 
        font-size: .8rem;
    }
</style>
