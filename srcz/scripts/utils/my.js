function reg(value,val_r,status){
    if ((/\w{3,15}/).test(this.value)){
        val = true;
        this.status = 'success'
    }else if(this.username==''&&this.password==''){
        this.userstatus = '';
        this.passstatus = '';
    }else{
        val_r = false;
        this.status = 'error'
    }
};

export default {
    reg
}