const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:+process.argv[2]||1});
await p.goto('file://'+__dirname+'/banner.html');await p.waitForTimeout(1500);await p.evaluate(()=>document.fonts.ready);
await p.screenshot({path:__dirname+'/'+(process.argv[3]||'preview.png')});await b.close();})();
