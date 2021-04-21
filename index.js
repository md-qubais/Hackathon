const puppeteer=require("puppeteer")
let url;
function waitandclick(selector){
    return new Promise(function(resolve,reject){
        let wait=current_tab.waitForSelector(selector,{visible:true})
    wait.then(function(){
        let clicked=current_tab.click(selector)
    return clicked;        
    }).then(function(){
        resolve();
    })
    .catch(function(){
        reject();
    })
    })
}


let browser=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized","--incognito"]

})
let current_tab;
browser.then(function(browser){
    let alltabs=browser.pages();
    return alltabs;
})
.then(function(arr){
    current_tab=arr[0];
    let loginPage=current_tab.goto("https://leetcode.com/accounts/login/")
    return loginPage;
})
.then(function(){
    console.log("login page")
    let email=current_tab.type("input[name='login']","raqimad2006@gmail.com",{delay:1})
    return email
})
.then(function(){
    let pass=current_tab.type("input[name='password']","qubaisuddin786",{delay:1})
    return pass
})
.then(function(){
    console.log("email and password Entered")
  let tab=current_tab.click(".btn-content-container__177h .btn-content__10Tj")
  current_tab=tab;  
  return tab;
})
.then(function(curr_tab){
    let browser=puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:["--start-maximized","--incognito"]
    
    })
    let current_tab;
    browser.then(function(browser){
        let alltabs=browser.pages();
        return alltabs;
    })
    .then(function(arr){
        current_tab=arr[0];
        let Page=current_tab.goto("https://leetcode.com/raqimad2006/")
        url="https://leetcode.com/raqimad2006/"
        run();
        return Page;
    })
})




async function run() {     
    console.log("screenshot")
    let browser = await puppeteer.launch({ headless: true });
    let page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
    await page.setViewport({ width: 1024, height: 800 });
    await page.screenshot({
     path: "./screenshot.jpg",
     type: "jpeg",
     fullPage: true
   });
   await page.close();
   await browser.close();
 }