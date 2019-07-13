(function(){
    var P=document.getElementsByTagName("el-dialog__close");
        P.onclick=function(){
            this.$router.push="/";
        }
    }
)()