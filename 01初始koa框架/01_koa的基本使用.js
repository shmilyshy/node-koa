//1.项目初始化 npm init 
//2.安装koa npm install koa --save
//安装nodemon npm install nodemon --save-dev

//3.引入koa
const Koa = require('koa')

//4.创建koa实例(类)
const app = new Koa();

//5.创建一个中间件
//ctx:上下文，包含了request和response等信息
//next:下一个中间件，调用下一个中间件
app.use((ctx,next)=>{
    ctx.body = 'hello koa';
    next();
})

//6.监听端口
app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
})