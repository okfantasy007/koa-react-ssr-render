
/**
 * 渲染react页面
 */

 exports.renderHtml = async (ctx) => {
    //http://127.0.0.1:3000/?state={"counter":5}
    console.log(ctx.query.state);
    console.log(JSON.stringify({
      counter: 2
    }));
    let initState = ctx.query.state ? JSON.parse(ctx.query.state) : null;
    ctx.renderServer("page1", {store: JSON.stringify(initState ? initState : { counter: 1 }) });
 }
 exports.favicon = (ctx) => {
   ctx.body = 'xxx';
 }

 exports.test = (ctx) => {
   ctx.body = {
     data: `测试数据`
   }
 }