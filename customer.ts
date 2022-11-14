export class Customer {
    id:number=0;
    cname:string='';
    city:string='';
    mobile:string='';
    constructor(id:number=0,
        cname:string='',
        city:string='',
        mobile:string=''){
            this.id=id; this.cname=cname; this.city=city; this.mobile=mobile;
        }

}
