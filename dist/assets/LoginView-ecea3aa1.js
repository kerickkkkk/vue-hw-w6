import{_ as l,o as u,c,d as m,a as s,f as i,j as d,k as p}from"./index-aadb2e42.js";const{VITE_APP_URL:f}={VITE_BASE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"vue3",BASE_URL:"/vue-hw-w6/",MODE:"production",DEV:!1,PROD:!0},_={data(){return{user:{username:"",password:""}}},methods:{login(){this.$http.post(`${f}/admin/signin`,this.user).then(t=>{alert("登入成功");const{expired:e,token:a}=t.data;document.cookie=`yiruToken=${a}; expires=${new Date(e)};`,this.$router.push("/admin/products")}).catch(t=>{alert(t.data.message)})}}},h={class:"container"},w={class:"form-floating mb-3"},g=s("label",{for:"username"},"Email address",-1),v={class:"form-floating"},b=s("label",{for:"password"},"Password",-1),x=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function E(t,e,a,V,r,n){return u(),c("div",h,[m(" 登入頁面 "),s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=p((...o)=>n.login&&n.login(...o),["prevent"]))},[s("div",w,[i(s("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.user.username=o),type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[d,r.user.username]]),g]),s("div",v,[i(s("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.user.password=o),type:"password",class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[d,r.user.password]]),b]),x],32)])}const k=l(_,[["render",E]]);export{k as default};
