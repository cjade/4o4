<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        <template>
                            <el-radio v-model="radio" label="1">备选项</el-radio>
                            <el-radio v-model="radio" label="2">备选项</el-radio>
                        </template>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                radio: '1'
            };
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
