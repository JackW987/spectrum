$(function(){ 
    // 删除按钮功能
    $('.btn-delete').click(function(){
        //询问框
        var _this=$(this);
        layer.confirm('是否删除此用户', {
            btn: ['确定','取消'] //按钮
        }, function(){
            _this.closest('tr').remove();
            layer.msg('删除成功', {icon: 1});
        });
    })
})