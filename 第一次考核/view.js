window.addEventListener('load', function () {
    let ct = document.querySelector('.city');
    let box = document.querySelector('.box');
    let weather = document.querySelector('.weather');
    let tem = document.querySelector('.tem');
    let cl = document.querySelector('.cloud');
    let page = document.querySelector('.page');
    let top = document.querySelector('.top');
    const xhr = new XMLHttpRequest();
    const xhr_2 = new XMLHttpRequest();
    const xhr_3 = new XMLHttpRequest();
    const xhr_4 = new XMLHttpRequest();
    let lis = document.querySelectorAll('.hot_city');
    let sr_btn = document.querySelector('.sr_btn');
    let sr = document.querySelector('.sr');
    let two_tem_1 = document.querySelector('.two_tem_1');
    let two_tem_2 = document.querySelector('.two_tem_2');
    let two_tem_4 = document.querySelector('.two_tem_4');
    let pg_2 = document.querySelector('.pg_2');
    let two_tem_3 = document.querySelector('.two_tem_3');
    let pg_4 = document.querySelector('.pg_4');
    let two_day = document.querySelector('.two_day');
    let show_1 = document.querySelector('.show_1');
    let hour_change = document.querySelector('.hour_change');
    let line = document.querySelector('.line');
    let last = document.querySelector('.last');
    let last_1 = document.querySelector('.last_1');
    let res_4;
    //默认获取重庆天气，后面根据搜索条件更改
    function getdata(text) {                                     //获取数据函数，并改变页面
        //接收返回值
        xhr.open("get", "https://v0.yiketianqi.com/api?version=v61&appid=88638596&appsecret=qL7mw4JP&city=" + text, true) //获取实时天气
        xhr_2.open("get", "https://v0.yiketianqi.com/api?version=v9&appid=88638596&appsecret=qL7mw4JP&city=" + text, true)//获取7日天气
        xhr_3.open("get", "https://v0.yiketianqi.com/api/worldchina?appid=88638596&appsecret=qL7mw4JP&city=" + text, true)
        xhr_4.open("get", "https://www.tianqiapi.com/life/lifepro?appid=88638596&appsecret=qL7mw4JP&city=" + text, true)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                    success_1();
                } else {
                    console.log("请求失败")
                }
            }
        }
        xhr_2.onreadystatechange = () => {
            if (xhr_2.readyState === 4) {
                if ((xhr_2.status >= 200 && xhr_2.status < 300) || xhr_2.status == 304) {
                    const res_2 = JSON.parse(xhr_2.responseText);
                    console.log(res_2);
                    two_tem_1.innerHTML = res_2.data[0].tem1 + "/" + res_2.data[0].tem2 + "&#176;";
                    pg_2.innerHTML = res_2.data[0].wea;
                    two_tem_3.innerHTML = res_2.data[1].tem2 + "/" + res_2.data[1].tem2 + "&#176;";
                    pg_4.innerHTML = res_2.data[1].wea;
                    if (res_2.data[0].wea == '阵雨' || res_2.data[0].wea == '阴转小雨' || res_2.data[0].wea == '雷阵雨' || res_2.data[0].wea == '小雨' || res_2.data[0].wea == '中雨' || res_2.data[0].wea == '大雨' || res_2.data[0].wea == '暴雨' || res_2.data[0].wea == '大暴雨' || res_2.data[0].wea == '特大暴雨') {
                        two_tem_2.className = "two_tem_2 iconfont icon-xiayu"
                        two_tem_2.style.color = "orange"
                        // console.log(res_2.data[0].wea);
                    }
                    else if (res_2.data[0].wea == '阴') {
                        two_tem_2.className = "two_tem_2 iconfont icon-yin"
                        two_tem_2.style.color = "black"
                    }
                    else if (res_2.data[0].wea == '多云') {
                        two_tem_2.className = "two_tem_2 iconfont icon-duoyun"
                        two_tem_2.style.color = "blue"
                    }
                    else if (res_2.data[0].wea == '雪' || res_2.data[0].wea == '小雪' || res_2.data[0].wea == '中雪' || res_2.data[0].wea == '大雪' || res_2.data[0].wea == '暴雪' || res_2.data[0].wea == '暴雪') {
                        two_tem_2.className = "two_tem_2 iconfont icon-xue"
                        two_tem_2.style.color = "blue"
                    }
                    else if (res_2.data[0].wea == '晴') {
                        two_tem_2.className = "two_tem_2 iconfont icon-qingtian"
                        two_tem_2.style.color = "yellow"
                    }
                    else if (res_2.data[0].wea == '雾') {
                        two_tem_2.className = "two_tem_2 iconfont icon-wu"
                        two_tem_2.style.color = "black"
                    }
                    else if (res_2.data[0].wea == '冰雹') {
                        two_tem_2.className = "two_tem_2 iconfont icon-xue"
                        two_tem_2.style.color = "blue"
                    }
                    if (res_2.data[1].wea == '阵雨' || res_2.data[1].wea == '阴转小雨' || res_2.data[1].wea == '雷阵雨' || res_2.data[1].wea == '小雨' || res_2.data[1].wea == '中雨' || res_2.data[1].wea == '大雨' || res_2.data[1].wea == '暴雨' || res_2.data[1].wea == '大暴雨' || res_2.data[1].wea == '特大暴雨') {
                        two_tem_4.className = "two_tem_2 iconfont icon-xiayu"
                        // console.log(res_2.data[1].wea);
                        two_tem_4.style.color = "orange"
                    }
                    else if (res_2.data[1].wea == '阴') {
                        two_tem_4.className = "two_tem_2 iconfont icon-yin"
                        two_tem_4.style.color = "black"
                    }
                    else if (res_2.data[1].wea == '多云') {
                        two_tem_4.className = "two_tem_2 iconfont icon-duoyun"
                        two_tem_4.style.color = "blue"
                    }
                    else if (res_2.data[1].wea == '雪' || res_2.data[1].wea == '小雪' || res_2.data[1].wea == '中雪' || res_2.data[1].wea == '大雪' || res_2.data[1].wea == '暴雪' || res_2.data[1].wea == '暴雪') {
                        two_tem_4.className = "two_tem_2 iconfont icon-xue"
                        two_tem_4.style.color = "blue"
                    }
                    else if (res_2.data[1].wea == '晴') {
                        two_tem_4.className = "two_tem_2 iconfont icon-qingtian"
                        two_tem_4.style.color = "yellow"
                    }
                    else if (res_2.data[1].wea == '雾') {
                        two_tem_4.className = "two_tem_2 iconfont icon-wu"
                        two_tem_4.style.color = "black"
                    }
                    else if (res_2.data[1].wea == '冰雹') {
                        two_tem_4.className = "two_tem_2 iconfont icon-xue"
                        two_tem_4.style.color = "blue"
                    }
                    let day = document.querySelectorAll('.day');
                    let day_page = document.querySelectorAll('.day_page');
                    let day_cloud = document.querySelectorAll('.day_cloud');
                    for (i = 0; i <= 6; i++) {

                        day_page[i].innerHTML = " <br>" + res_2.data[i].date.substr(5, 10) + " <br>" + res_2.data[i].week + " <br>" + res_2.data[i].wea;
                        day_cloud[i].innerHTML = res_2.data[i].win[0] + " <br>" + res_2.data[i].win_speed.substr(0, 4);
                        if (res_2.data[i].wea == '阵雨' || res_2.data[i].wea == '阴转小雨' || res_2.data[i].wea == '雷阵雨' || res_2.data[i].wea == '小雨' || res_2.data[i].wea == '中雨' || res_2.data[i].wea == '大雨' || res_2.data[i].wea == '暴雨' || res_2.data[i].wea == '大暴雨' || res_2.data[i].wea == '特大暴雨') {
                            day[i].className = "day iconfont icon-xiayu"
                            // console.log(res_2.data[1].wea);
                            day[i].style.color = "orange"
                        }
                        else if (res_2.data[i].wea == '阴') {
                            day[i].className = "day iconfont icon-yin"
                            day[i].style.color = "black"
                        }
                        else if (res_2.data[i].wea == '多云') {
                            day[i].className = "day iconfont icon-duoyun"
                            day[i].style.color = "blue"
                        }
                        else if (res_2.data[i].wea == '雪' || res_2.data[i].wea == '小雪' || res_2.data[i].wea == '中雪' || res_2.data[i].wea == '大雪' || res_2.data[i].wea == '暴雪' || res_2.data[i].wea == '暴雪') {
                            day[i].className = "day iconfont icon-xue"
                            day[i].style.color = "blue"
                        }
                        else if (res_2.data[i].wea == '晴') {
                            day[i].className = "day iconfont icon-qingtian"
                            day[i].style.color = "yellow"
                        }
                        else if (res_2.data[i].wea == '雾') {
                            day[i].className = "day iconfont icon-wu"
                            day[i].style.color = "black"
                        }
                        else if (res_2.data[i].wea == '冰雹') {
                            day[i].className = "day iconfont icon-xue"
                            day[i].style.color = "blue"
                        }
                        else {
                            day[i].className = "day iconfont icon-yin"
                            day[i].style.color = "black"
                        }
                    }
                    let mychart = echarts.init(document.querySelector('.photo'));
                    option = {
                        xAxis: {
                            type: 'category',
                            data: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
                            show: false
                        },
                        yAxis: {
                            type: "value",
                            show: false,
                            default: 0.5
                        },
                        series: [{
                            data: [res_2.data[0].tem1, res_2.data[1].tem1, res_2.data[2].tem1, res_2.data[3].tem1, res_2.data[4].tem1, res_2.data[5].tem1, res_2.data[6].tem1],
                            type: "line",
                            smooth: true,
                        },
                        {
                            data: [res_2.data[0].tem2, res_2.data[1].tem2, res_2.data[2].tem2, res_2.data[3].tem2, res_2.data[4].tem2, res_2.data[5].tem2, res_2.data[6].tem2],
                            type: "line",
                            smooth: true,
                        }],

                        color: ['orange', 'blue'],
                        label: {
                            show: true, //开启显示
                            position: ['top', 'bottom'], //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            }
                        }

                    };
                    mychart.setOption(option);
                } else {
                    console.log("请求失败")
                }
            }
        }
        xhr_3.onreadystatechange = () => {
            if (xhr_3.readyState === 4) {
                if ((xhr_3.status >= 200 && xhr_3.status < 300) || xhr_3.status == 304) {
                    const res_3 = JSON.parse(xhr_3.responseText);
                    console.log(res_3);
                    console.log()
                    let time = document.querySelectorAll(".time")
                    let icon = document.querySelectorAll(".icon")
                    let hour_tem = document.querySelectorAll(".hour_tem")
                    for (let i = 0; i < 24; i++) {
                        time[i].innerHTML = res_3.hours[i].time;
                        if (res_3.hours[i].wea == '阵雨' || res_3.hours[i].wea == '阴转小雨' || res_3.hours[i].wea == '雷阵雨' || res_3.hours[i].wea == '小雨' || res_3.hours[i].wea == '中雨' || res_3.hours[i].wea == '大雨' || res_3.hours[i].wea == '暴雨' || res_3.hours[i].wea == '大暴雨' || res_3.hours[i].wea == '特大暴雨') {
                            icon[i].className = "icon iconfont icon-xiayu"
                            // console.log(res_2.data[1].wea);
                            icon[i].style.color = "orange"
                        }
                        else if (res_3.hours[i].wea == '阴') {
                            icon[i].className = "icon iconfont icon-yin"
                            icon[i].style.color = "black"
                        }
                        else if (res_3.hours[i].wea == '多云') {
                            icon[i].className = "icon iconfont icon-duoyun"
                            icon[i].style.color = "rgba(0, 195, 255, 0.726)"
                        }
                        else if (res_3.hours[i].wea == '雪' || res_3.hours[i].wea == '小雪' || res_3.hours[i].wea == '中雪' || res_3.hours[i].wea == '大雪' || res_3.hours[i].wea == '暴雪' || res_3.hours[i].wea == '暴雪') {
                            icon[i].className = "icon iconfont icon-xue"
                            icon[i].style.color = "blue"
                        }
                        else if (res_3.hours[i].wea == '晴') {
                            icon[i].className = "icon iconfont icon-qingtian"
                            icon[i].style.color = "yellow"
                        }
                        else if (res_3.hours[i].wea == '雾') {
                            icon[i].className = "icon iconfont icon-wu"
                            icon[i].style.color = "black"
                        }
                        else if (res_3.hours[i].wea == '冰雹') {
                            icon[i].className = "icon iconfont icon-xue"
                            icon[i].style.color = "blue"
                        }
                        hour_tem[i].innerHTML = res_3.hours[i].tem + "&#176";
                    }
                } else {
                    console.log("请求失败")
                }
            }
        }
        xhr_4.onreadystatechange = () => {
            if (xhr_4.readyState === 4) {
                if ((xhr_4.status >= 200 && xhr_4.status < 300) || xhr_4.status == 304) {
                    res_4 = JSON.parse(xhr_4.responseText);
                    console.log(res_4);
                    let fit = document.querySelectorAll('.fit');
                    fit[0].innerHTML = res_4.data.chenlian.level;
                    fit[1].innerHTML = res_4.data.chuanyi.level;
                    fit[2].innerHTML = res_4.data.diaoyu.level;
                    fit[3].innerHTML = res_4.data.fangshai.level;
                    fit[4].innerHTML = res_4.data.fenghan.level;
                    fit[5].innerHTML = res_4.data.fengzheng.level;
                    fit[6].innerHTML = res_4.data.ganmao.level;
                    fit[7].innerHTML = res_4.data.ganzao.level;
                    fit[8].innerHTML = res_4.data.guangjie.level;
                    fit[9].innerHTML = res_4.data.guomin.level;
                    fit[10].innerHTML = res_4.data.huachuan.level;
                    fit[11].innerHTML = res_4.data.huazhuang.level;
                    fit[12].innerHTML = res_4.data.jiaotong.level;
                    fit[13].innerHTML = res_4.data.kongtiao.level;
                    fit[14].innerHTML = res_4.data.kouzhao.level;
                    fit[15].innerHTML = res_4.data.liangshai.level;
                }
            } else {
                console.log("请求失败")
            }
        }
        //发送请求
        xhr.send()
        xhr_2.send()
        xhr_3.send()
        xhr_4.send()
    }
    let page_change = document.querySelectorAll('.page_change');
    page_change[0].style.backgroundColor = 'yellowgreen';
    let tip_1 = document.querySelector('.tip_1');
    let tip_2 = document.querySelector('.tip_2');
    for (let i = 0; i < page_change.length; i++) {
        page_change[i].addEventListener('click', function () {
            if (i == 0) {
                tip_2.style.display = 'none';
                page_change[1].style.backgroundColor = 'white';
                tip_1.style.display = 'block';
                page_change[0].style.backgroundColor = 'yellowgreen';
            }
            else {
                tip_1.style.display = 'none';
                page_change[0].style.backgroundColor = 'white';
                tip_2.style.display = 'block';
                page_change[1].style.backgroundColor = 'yellowgreen';
            }
        })
    }
    function success_1() {
        const res = JSON.parse(xhr.responseText);
        console.log(res);
        ct.innerHTML = res.city;
        let temp;
        if (res.air <= 50) {           //根据不同空寂质量首先是不同指标
            temp = '优';
        }
        else if (res.air > 50 && res.air <= 100) {
            temp = '良';
        }
        else {
            temp = '污染';
        }
        cl.innerHTML = res.win + " " + res.win_speed;
        tem.innerHTML = res.tem + '&#176;';
        weather.innerHTML = res.wea;
        box.innerHTML = res.air + temp;
        if (res.tem < 10) {
            page.innerHTML = '天气寒冷注意保暖~';
        }
        else if (res.tem >= 10 && res.tem < 20) {
            page.innerHTML = '现在温度比较凉爽~';
        }
        else if (res.tem >= 20 && res.tem < 30) {
            page.innerHTML = '现在温度比较适宜~';
        }
        else {
            page.innerHTML = '天气炎热以防中暑~';
        }
        if (res.wea == '阵雨' || res.wea == '雷阵雨' || res.wea == '小雨' || res.wea == '中雨' || res.wea == '大雨' || res.wea == '暴雨' || res.wea == '大暴雨' || res.wea == '特大暴雨') {
            top.style.background = " url(yu.jpg)";
        }
        else if (res.wea == '阴') {
            top.style.background = "url(yin.jpg)";
        }
        else if (res.wea == '多云') {
            top.style.background = " url(yun.jpg)";
        }
        else if (res.wea == '雪' || res.wea == '小雪' || res.wea == '中雪' || res.wea == '大雪' || res.wea == '暴雪' || res.wea == '暴雪') {
            top.style.background = "url(xue.jpg)";
        }
        else if (res.wea == '晴') {
            top.style.background = "url(qing.jpg)";
        }
        else if (res.wea == '雾') {
            top.style.background = "url(wu.jpg)";
        }
        else if (res.wea == '冰雹') {
            top.style.background = " url(bingbao.jpg)";
        }
    }
    let words = document.querySelectorAll('.words');
    let life = document.querySelectorAll('.life');
    let wd_button = document.querySelector('.wd_button');
    let wd = document.querySelector('.wd');
    wd_button.addEventListener('click', function () {
        wd.style.display = 'none';
    })
    for (let i = 0; i < words.length; i++) {                     //热门城市点击获取数据
        words[i].addEventListener("click", function () {
            let wd_top = document.querySelector('.wd_top');
            let wd_page = document.querySelector('.wd_page');
            wd.style.display = 'block';
            if (i == 0) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "rgb(96, 152, 226)";
                wd_page.innerHTML = res_4.data.chenlian.desc;
            }
            else if (i == 1) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "black";
                wd_page.innerHTML = res_4.data.chuanyi.desc;
            }
            else if (i == 2) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "purple";
                wd_page.innerHTML = res_4.data.diaoyu.desc;
            }
            else if (i == 3) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "yellowgreen";
                wd_page.innerHTML = res_4.data.fangshai.desc;
            }
            else if (i == 4) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "blue";
                wd_page.innerHTML = res_4.data.fenghan.desc;
            }
            else if (i == 5) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "green";
                wd_page.innerHTML = res_4.data.fengzheng.desc;
            }
            else if (i == 6) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "grey";
                wd_page.innerHTML = res_4.data.ganmao.desc;
            }
            else if (i == 7) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "orange";
                wd_page.innerHTML = res_4.data.ganzao.desc;
            }
            else if (i == 8) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "rgb(96, 152, 226)";
                wd_page.innerHTML = res_4.data.guangjie.desc;
            }
            else if (i == 9) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "black";
                wd_page.innerHTML = res_4.data.guomin.desc;
            }
            else if (i == 10) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "purple";
                wd_page.innerHTML = res_4.data.huachuan.desc;
            }
            else if (i == 11) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "yellowgreen";
                wd_page.innerHTML = res_4.data.huazhuang.desc;
            }
            else if (i == 12) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "blue";
                wd_page.innerHTML = res_4.data.jiaotong.desc;
            }
            else if (i == 13) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "grey";
                wd_page.innerHTML = res_4.data.kongtiao.desc;
            }
            else if (i == 14) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "grey";
                wd_page.innerHTML = res_4.data.kouzhao.desc;
            }
            else if (i == 15) {
                wd_top.innerHTML = life[i].innerHTML;
                wd_top.style.backgroundColor = "orange";
                wd_page.innerHTML = res_4.data.liangshai.desc;
            }

        })
    }
    console.log(hour_change.style.height)
    getdata("南岸");                        //初始获取南岸数据
    sr_btn.addEventListener("click", function () {         //获取搜索框输入城市的天气数据
        if (sr.value == "") {
            alert("城市不能为空");

        }
        else {
            let text = sr.value;
            sr.value = "";
            let li = document.createElement('li');
            show_1.insertBefore(li, show_1.children[0]);
            show_1.style.height = '40px'
            li.innerHTML = text;
            // console.log(text);
            // alert(text)
            getdata(text);
            search.style.display = 'none';
            two_day.style.display = 'block';
            hour_change.style.display = 'block';
            line.style.display = 'block';
            tip_1.style.display = 'block';
            last.style.display = 'block';
            last_1.style.dispaly = 'block';
        }
    })
    for (let i = 0; i < lis.length; i++) {                     //热门城市点击获取数据
        lis[i].addEventListener("click", function () {
            let text = lis[i].innerHTML;
            getdata(text);
            let li = document.createElement('li');
            show_1.insertBefore(li, show_1.children[0]);
            li.innerHTML = text;
            if (show_1.children.length % 3 == 1) {
                show_1.style.height = 40 * (show_1.children.length / 3 + 1) + "px";           //调整历史搜索区域的高度
                console.log(show_1.style.height);
            }
            search.style.display = 'none';
            two_day.style.display = 'block';
            hour_change.style.display = 'block';
            line.style.display = 'none';
            tip_1.style.display = 'block';
            last.style.display = 'block';
            last_1.style.dispaly = 'block';
            line.style.display = 'block';
        })
    }
    let search = document.querySelector('.search');
    ct.addEventListener('click', function () {
        search.style.display = 'block';
        tip_1.style.display = 'none';
        tip_2.style.display = 'none';
        last.style.display = 'none';
        line.style.display = 'block';
        two_day.style.display = 'none';
        hour_change.style.display = 'none';
        line.style.display = 'none';
    })
    let del = document.querySelector('.delete');
    del.addEventListener('click', function () {
        search.style.display = 'none';
        two_day.style.display = 'block';
        hour_change.style.display = 'block'
        line.style.display = 'block'
        tip_1.style.display = 'block'
        last.style.display = 'block'
        last_1.style.display = 'block'
    })



    let bd = document.querySelector('body');
    bd.style.display = 'block';
})