$(function(){
    let timeNavBox = document.getElementsByClassName("timeNavBox")[0];
    let guide1leftNavBox = document.getElementsByClassName("guide1leftNavBox")[0];
    let guide2Nav = document.getElementsByClassName("guide2Nav")[0];
   
// .............timeNav UI.......................
    $.get({
        url: "../src/api/timeNav.php",
        success(data) {
            let dataList = JSON.parse(data);
            let res = "";
            dataList.forEach(element => {
                res+=`<li class="timeNavLi">
                        <p><a href=""><img src="./src/img/${element.image}.jpg" alt=""></a></p>
                        <p><a href="">${element.content}</a></p>
                        <p> ¥${element.price}</p>
                    </li>`
            });
            timeNavBox.innerHTML = res;     
        },
    });
// .............guide1leftNavBox UI.......................
    $.get({
        url: "../src/api/guide1Nav.php",
        success(data) {
            let dataList = JSON.parse(data);
            let res = "";
            dataList.forEach(element => {
                res+=`<li class="guide1NavLi">
                        <a href=""><img src="./src/img/${element.image}.jpg" alt=""></a>
                        <p class="guide1NavContent">${element.content}</p>
                        <span class="guide1NavPrice">¥${element.price}</span>
                        <a href="" class="guide1NavBtn">抢购</a>
                    </li>`
            });
            guide1leftNavBox.innerHTML = res;     
        },
    });
    // .............guide2Nav UI.......................
    $.get({
        url: "../src/api/guide2Nav.php",
        success(data) {
            let dataList = JSON.parse(data);
            let res = "";
            dataList.forEach(element => {
                res+=` <div class="small">
                            <div class="bigdiv">
                            <div>
                                <a href="" class="bigimg"><img src="./src/img/${element.image}.jpg" alt=""></a>
                            </div>
                            <div class="bigcontent">
                                <div class="bigheader">
                                    <span>推荐度${element.percent}</span>
                                    <a href="">${element.content}</a>
                                </div>
                                <p class="bighotcontent">${element.comment}</p>
                                <div class="bighotperson">
                                    <a href="">[${element.commentnumber}]</a>
                                    <div>
                                        <span>${element.user}</span>
                                        <span class="personimg"  style="background-position: ${element.position}"></span>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="smalldiv">
                                <p>${element.content}</p>
                                <p>推荐度${element.percent}</p>
                                <p>${element.commentnumber}人已评论</p>
                                <img src="./src/img/${element.image}.jpg" alt="">
                            </div>
                        </div>`
            });
            guide2Nav.innerHTML = res;
            $(".small:eq(0)").addClass("big").removeClass("small");
        },
    });
    // ................prolist......................
    $.get({
        url: "../src/api/prolist.php",
        success(data) {
            let dataList = JSON.parse(data);
            let res1 = "";
            dataList.forEach(element => {
                if (element.index > 5) {
                    return
                }
                res1+=`<li class="prolistLi">
                        <a href="" class="prolistLiImg"><img src="./src/img/${element.image}.jpg" alt=""></a>
                        <a href="">${element.content}</a>
                        <span>¥${element.price}</span>
                    </li>`
            });
                
            let res2 = "";
            dataList.forEach(element => {
                if (6>element.index||element.index> 10) {
                    return
                }
                res2+=`<li class="prolistLi">
                        <a href="" class="prolistLiImg"><img src="./src/img/${element.image}.jpg" alt=""></a>
                        <a href="">${element.content}</a>
                        <span>¥${element.price}</span>
                    </li>`
            });
            let res3 ="";
            dataList.forEach(element => {
                if (11>element.index||element.index>15) {
                    return
                }
                res3+=`<li class="prolistLi">
                        <a href="" class="prolistLiImg"><img src="./src/img/${element.image}.jpg" alt=""></a>
                        <a href="">${element.content}</a>
                        <span>¥${element.price}</span>
                    </li>`
            });
            let res4 ="";
            dataList.forEach(element => {
                if (16>element.index ||element.index>20) {
                    return
                }
                res4+=`<li class="prolistLi">
                        <a href="" class="prolistLiImg"><img src="./src/img/${element.image}.jpg" alt=""></a>
                        <a href="">${element.content}</a>
                        <span>¥${element.price}</span>
                    </li>`
            });
            $(".prolist:eq(0)").html(res1).addClass("block").removeClass("prolist");
            $(".prolist:eq(1)").html(res2); 
            $(".prolist:eq(2)").html(res3); 
            $(".prolist:eq(3)").html(res4);    
        },
    });
})

