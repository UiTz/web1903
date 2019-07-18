<template>
  <div class="admin-list">
    <el-table
            v-loading='load'
            ref="multipleTable"
            @selection-change="handleSelectionChange"
            :data="userData"
            border
            tooltip-effect="dark"
            style="width: 100%">
      <el-table-column
              type="selection">
      </el-table-column>
  
      <el-table-column
              prop="uid"
              label="UID">
      </el-table-column>
      
      <el-table-column
              prop="uname"
              label="用户名">
      </el-table-column>
      
      <el-table-column
              prop="upwd"
              label="密码">
      </el-table-column>
      
      <el-table-column
              prop="email"
              label="邮箱">
      </el-table-column>
  
      <el-table-column
              prop="phone"
              label="电话">
      </el-table-column>
      
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
                  size="small"
                  @click="editGoods(scope.row)">修改
          </el-button>
          <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    
    </el-table>
    <div class="btns">
      <el-button type="success">添加用户</el-button>
      <el-button type="danger" @click="deleteUser">删除用户</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {
        userData: [],
        userSelected: [],
        load: false, // loading
      }
    },
    methods: {
      // 删除
      handleDelete(row) {
        this.func.ajaxPost(this.api.goodsDelete, {id: row.id}, res => {
          if (res.data.code === 200) {
            let index = this.tableData.indexOf(row);
            this.tableData.splice(index, 1);
            this.$message.success('删除成功');
          }
        });
      },
      // 修改
      editGoods (row) {
        this.$router.push({path: '/admin/goods-form', query: {id: row.id}});
      },
      deleteUser () {
        let multi = this.userSelected;
        // 判断是否选择用户
        if (multi.length === 0) {
          this.$message({
          message: '警告！请选择要操作的用户',
          type: 'warning'
          })
        } else {
          this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          }).then(() => {
            let uid = multi.map(el => {
              return el.uid;
            });
            uid = String(uid);
            console.log(uid);
            this.axios.get('deluser',{params:{uid}}).then(res => {
              console.log(res);
              if (res.data.code === 200) {
                this.$message.success('删除成功');
                multi.forEach(el => {
                  let i = this.userData.indexOf(el);
                  this.userData.splice(i, 1);
                });
              }
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      },
      handleSelectionChange(val) {
        this.userSelected = val;
      }
    },
    created () {
      // 启动懒加载
      this.load = true;
      // 请求用户数据
      let Base64 = require('js-base64').Base64;
      let admin_uname = 'liujiaxin';
      let admin_upwd = Base64.encode("liujiaxin8");
      //console.log(admin_upwd);
      this.axios.post('user',this.$qs.stringify({
        admin_uname,admin_upwd
      })).then((res)=> {
        if (res.data.code === 200) {
          this.userData = res.data.data;
          // 请求到数据后关闭懒加载
          this.load = false;
        } else {
          console.log(res);
          this.$message.warning('请稍后再试!')
        }
      }).catch(err=> {
        console.log(err);
      })
    },
  }
</script>
